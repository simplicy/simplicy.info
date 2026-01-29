import { BaseFmc } from "../basefmc";
export class SubsonicFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("subsonic");
  }
}
export const subsonicFmc = new SubsonicFmc();

