import { useQuery } from "react-query";
import { BookingInfo, EmailForCreate } from "./types";
import { contactFmc } from "./models";

export const useContact = (
  data: EmailForCreate,
) => useQuery('closytUser', async () => {
  return await contactFmc.send_email(data).then((data) => {
    return data;
  });
}, { enabled: false });

export const useSlots = (
) => useQuery('slots', async () => {
  return await contactFmc.slots().then((data) => {
    return data;
  });
}, { enabled: false });

export const useBook = (
  data: BookingInfo
) => useQuery('book', async () => {
  return await contactFmc.book(data).then((data) => {
    return data;
  });
}, { enabled: false });

