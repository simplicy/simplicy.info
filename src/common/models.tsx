import { BaseFmc, ModelMutateResultData } from "./basefmc";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { User } from "@auth0/auth0-react";
import {
  CalEvent,
  CalEventForCreate,
  CalEventForUpdate,
  ChangeLog,
  ClosytUser, ClosytUserForCreate, ClosytUserForUpdate,
  Item, ItemForCreate, ItemForUpdate,
  NotifyData,
  Outfit, OutfitForCreate, OutfitForUpdate,
  Registration,
  Tag, TagForCreate, TagForUpdate,
  Ticket, TicketForCreate, TicketForUpdate
} from "./types";
export class ClosyFmc extends BaseFmc<any, any, any> {
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

  async notifications(): Promise<NotifyData> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`/api/notifications`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
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

  async changelog(): Promise<ChangeLog> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`/api/notice/changelog`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
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
export const closytFmc = new ClosyFmc();

export class ClosytUserFmc extends BaseFmc<ClosytUser, ClosytUserForCreate, ClosytUserForUpdate> {
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


export class ClosytRegisrationFmc extends BaseFmc<Registration, string, Object> {
  constructor() {
    super("register");
  }
  async preregister(data: string): Promise<ModelMutateResultData> {
    let body = {
      "email": data
    };
    return await this.post(body, "create");
  }
  async invite(id: string, token: string): Promise<ModelMutateResultData> {
    let body = { id };
    return await this.post(body, "invite", token);
  }

}
export const closytRegistrationFmc = new ClosytRegisrationFmc();

export class ClosytItemFmc extends BaseFmc<Item, ItemForCreate, ItemForUpdate> {
  constructor() {
    super("items");
  }
  async fetchItems(token: string): Promise<Item[]> {
    let list = await this.list(token).then(async (data) => {
      return data.map(async (item: Item) => {
        let url = await this.downloadImg(item.image.id, token);
        item.image.blob = url;
        return item as Item;
      });
    });
    return await Promise.all(list);
  }

}
export const closytItemFmc = new ClosytItemFmc();

export class ClosytOutfitFmc extends BaseFmc<Outfit, OutfitForCreate, OutfitForUpdate> {
  constructor() {
    super("outfits");
  }
  async fetchOutfits(token: string): Promise<Outfit[]> {
    let data = await this.list(token);
    const res = await Promise.all(data.map(async (outfit: Outfit) => {
      let url = await closytOutfitFmc.downloadImg(outfit.image.id, token);
      let items = outfit.items.map(async (item: Item) => {
        let url = await closytItemFmc.downloadImg(item.image.id, token);
        item.image.blob = url;
        return item;
      });
      outfit.image.blob = url;
      outfit.items = await Promise.all(items);
      return outfit;
    }));
    return res;
  }
}

export const closytOutfitFmc = new ClosytOutfitFmc();

export class ClosytTicketFmc extends BaseFmc<Ticket, TicketForCreate, TicketForUpdate> {
  constructor() {
    super("support");
  }
}
export const closytTicketFmc = new ClosytTicketFmc();


export class ClosytTagFmc extends BaseFmc<Tag, TagForCreate, TagForUpdate> {
  constructor() {
    super("tags");
  }
  async fetchTags(token: string): Promise<Tag[]> {
    let data = await this.list(token);
    let res = data.map(async (tag: Tag) => {
      let items = tag.items.map(async (item: Item) => {
        let url = await closytItemFmc.downloadImg(item.image.id, token);
        item.image.blob = url;
        return item;
      });
      tag.items = await Promise.all(items);
      return tag;
    });
    return await Promise.all(res);
  }
}
export const closytTagFmc = new ClosytTagFmc();

export class ClosytEventFmc extends BaseFmc<CalEvent, CalEventForCreate, CalEventForUpdate> {
  constructor() {
    super("events");
  }
}
export const closytEventFmc = new ClosytEventFmc();
