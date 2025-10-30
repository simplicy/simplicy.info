import { BaseFmc } from "./basefmc";
import { toast } from "react-toastify";
import { BookingInfo, EmailForCreate } from "./types";
export class ContactFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("");
  }
  async book(data: BookingInfo): Promise<any[]> {
    const headers = {
      'Content-Type': 'application/json',
    };
    let body = JSON.stringify({ data });
    return fetch(`/api/calendar/book`, { method: 'POST', headers, body }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
        return res.data;
      }
    }).catch((error) => {
      toast.error("Error Ocurred:" + error.message)
      console.error('Error:', error);
      return false;
    });
  }
  async slots(): Promise<any[]> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch(`/api/calendar/open`, { method: 'GET', headers }).then((res) => res.json()).then((res) => {
      if (res.error) {
        toast.error(res.message);
        return false;
      }
      if (res.data) {
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

