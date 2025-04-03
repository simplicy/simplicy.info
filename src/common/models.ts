import { BaseFmc, ModelMutateResultData } from "./basefmc";
import { toast } from "react-toastify";
import { EmailForCreate } from "./types";
import Cookies from "js-cookie";
import { User } from "@auth0/auth0-react";
export class ContactFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("");
  }
  async about(): Promise<any[]> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`/api/`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
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



  async send_email(data: EmailForCreate): Promise<any[]> {
    const headers = {
      'Content-Type': 'application/json',
    };
    let body = JSON.stringify({ data });
    return fetch(`/api/contact`, { method: 'POST', headers, body }).then((res) => res.json()).then((res) => {
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
      toast.error("Error Ocurred! Please try again later.")
      console.error('Error:', error);
      return false;
    });
  }
}
export const contactFmc = new ContactFmc();

export class ClosytUserFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("auth");
  }
  async handleRustAuth(user: User, token: string) {
    const body = JSON.stringify({
      "email": user.email,
      "name": user.name,
      "picture_blob": user.picture,
      "sub": user.sub,
      "nickname": user.nickname,
      "email_verified": user.email_verified,
      "updated_at": user.updated_at,
    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    return fetch('/api/auth/auth0', { method: 'POST', headers, body })
      .then((res) => res.json()).then((data) => {
        let res = data.data;
        if (!res.authenticated) {
          Cookies.set('error', data.message);
          console.error('Error:', data.message);
          return false;
        }
        // TODO fix auth so this is not called a million times
        // toast.success("Authenticated");
        return Promise.resolve(res);
      }).catch((error) => {
        Cookies.set('error', "Try again later!");
        console.error('Error:', error);
        return error;
      });
  }

  async logout(token: string): Promise<ModelMutateResultData> {
    return await this.post({}, "logout", token);
  }
}
export const closytUserFmc = new ClosytUserFmc();

