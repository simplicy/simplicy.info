import { BaseFmc } from "../basefmc";
export class ContactFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("email");
  }
}
export const contactFmc = new ContactFmc();

