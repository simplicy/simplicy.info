import { useQuery } from "react-query";
import { EmailForCreate } from "./types";
import { contactFmc } from "./models";

export const useContact = (
  data: EmailForCreate,
) => useQuery('closytUser', async () => {
  return await contactFmc.send_email(data).then((data) => {
    return data;
  });
}, { enabled: false });

