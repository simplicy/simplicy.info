import { BaseFmc } from "../basefmc";
export class FilesFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("files");
  }
}
export const filesFmc = new FilesFmc();

