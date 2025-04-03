import { toast } from "react-toastify";

export interface ModelMutateResultData { id: string, }

export class BaseFmc<M, C, U> {
  #cmd_suffix: string
  auth0token: string = "";
  get cmd_suffix() { return this.#cmd_suffix; }
  ;

  constructor(cmd_suffix: string) {
    this.#cmd_suffix = cmd_suffix;
  }

  async get(path: string, token: string): Promise<M> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return fetch(`/api/${this.cmd_suffix}/${path}`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }

  async list(token: string): Promise<M[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return fetch(`/api/${this.cmd_suffix}/list`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return [];
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }

  async create(data: C, token: string): Promise<ModelMutateResultData> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    let body = JSON.stringify({
      "data": data
    });
    return fetch(`/api/${this.cmd_suffix}/create`, { method: 'POST', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }
  async post(data: U, path: string, token?: string): Promise<ModelMutateResultData> {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    let body = JSON.stringify({
      "data": data
    });
    return fetch(`/api/${this.cmd_suffix}/${path}`, { method: 'POST', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      console.error('Error:', error);
      return false;
    });
  }

  async update(id: string, data: U, token: string): Promise<ModelMutateResultData> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    let body = JSON.stringify({
      "id": id,
      "data": data
    });
    return fetch(`/api/${this.cmd_suffix}/update`, { method: 'PUT', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message && window.location.pathname !== "/sign-up") {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }

  async favorite(id: string, data: boolean, token: string): Promise<ModelMutateResultData> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    let body = JSON.stringify({
      "id": id,
      "data": { favorite: data }
    });
    return fetch(`/api/${this.cmd_suffix}/favorite`, { method: 'PUT', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }
  async deleteMany(ids: string[], token: string): Promise<ModelMutateResultData> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    let body = JSON.stringify({ "ids": ids });
    return fetch(`/api/${this.cmd_suffix}/delete`, { method: 'DELETE', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      if (error.message === "Failed to fetch") {
        toast.error("Error: Server is not reachable");
      }
      else {
        toast.error("Error Ocurred:" + error.message)
      }
      console.error('Error:', error);
      return false;
    });
  }

  async delete(id: string, token: string): Promise<ModelMutateResultData> {
    return await this.deleteMany([id], token);

  }
  async uploadFile(file: FormData, token: string) {
    const headers = { 'Authorization': 'Bearer ' + token }
    return fetch('/api/s3', { method: 'POST', headers, body: file })
      .then((res) => res.json()).then((res) => {
        if (res.error) {
          toast.error("Error Uploading Image:" + res.message)
        }
        else {
          toast.success("Image Uploaded");
        }
        return Promise.resolve(res);
      }).catch((error) => {
        toast.error("Error Ocurred:" + error.message)
        console.error('Error:', error);
        return error;
      });
  }
  /**
   * 
   */
  async downloadImg(id: string, token: string) {
    const headers =
    {
      'Content-Type': 'application / json',
      'Authorization': 'Bearer ' + token,
    }
    return fetch('/api/s3/' + id, { method: 'GET', headers })
      .then((response) => response.blob())
      .then((blob: any) => {
        const url = URL.createObjectURL(blob);
        return Promise.resolve(url);
      })
      .catch((error) => {
        toast.error("Error Ocurred:" + error.message)
        console.error('Error:', error);
        return "";
      });
  }

  async index(): Promise<M[]> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`/`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        if (res.message) {
          toast.success(res.message);
        }
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }
}
