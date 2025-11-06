import { BaseFmc } from "../basefmc";
export class CalendarFmc extends BaseFmc<any, any, any> {
  constructor() {
    super("calendar");
  }
}
export const calendarFmc = new CalendarFmc();

