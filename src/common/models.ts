import { BaseFmc, ModelMutateResultData } from "./basefmc";
import { toast } from "react-toastify";
import { EmailForCreate } from "./types";
import Cookies from "js-cookie";
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
}
export const closytUserFmc = new ClosytUserFmc();

