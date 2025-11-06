import { useQuery } from "react-query";
import { BookingInfo, EmailForCreate } from "./types";
import { contactFmc } from "./models/contact";
import { steamFmc } from "./models/steam";
import { calendarFmc } from "./models/calendar";

export const useContact = (
  data: EmailForCreate,
) => useQuery('contact', async () => {
  return await contactFmc.post(data, "contact").then((data) => {
    return data;
  });
}, { enabled: false });

export const usePlaying = (
) => useQuery('playing', async () => {
  return await steamFmc.get("playing").then((data) => {
    return data;
  });
}, { enabled: false });

export const useSlots = (
) => useQuery('slots', async () => {
  return await calendarFmc.get("open").then((data) => {
    return data;
  });
}, { enabled: false });

export const useBook = (
  data: BookingInfo
) => useQuery('book', async () => {
  return await calendarFmc.post(data, "book").then((data) => {
    return data;
  });
}, { enabled: false });

