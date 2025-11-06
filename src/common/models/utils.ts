import { BaseFmc } from "../basefmc";
export class UtilsFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("utils");
  }
}
export const utilsFmc = new UtilsFmc();

