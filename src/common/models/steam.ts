import { BaseFmc } from "../basefmc";
export class SteamFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("steam");
  }
}
export const steamFmc = new SteamFmc();

