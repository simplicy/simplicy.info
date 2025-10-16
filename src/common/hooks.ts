import { useQuery } from "react-query";
import { EmailForCreate } from "./types";
import Cookies from "js-cookie";
import { closytUserFmc } from "./models";
import { contactFmc } from "./models";

export const useContact = (
  data: EmailForCreate,
) => useQuery('closytUser', async () => {
  return await contactFmc.send_email(data).then((data) => {
    return data;
  });
}, { enabled: false });

export const useAbout = () => useQuery('about', async () => {
  return await contactFmc.about().then((data) => {
    return data;
  });
}, { enabled: false });

export const useMeta = (
  data: any,
) => useQuery('meta', async () => {
  return await contactFmc.post(data, "").then((data) => {
    return data;
  });
}, { enabled: false });


export const useClosytUser = (
  isClosytAuthenticated: boolean,
  handleLogout: () => void,
  getAccessTokenSilently: () => Promise<string>
) => useQuery('closytUser', async () => {
  let token = await getAccessTokenSilently();
  if (isClosytAuthenticated) {
    return await closytUserFmc.get("profile", token).then((data) => {
      if (!data) {
        console.log("Error with user");
        Cookies.set('error', "Please login again.");
        handleLogout();
      }
      return data;
    });
  }
}, { enabled: false });

