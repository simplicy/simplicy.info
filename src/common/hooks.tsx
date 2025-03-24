import { useQuery } from "react-query";
import Cookies from "js-cookie";
import {
  closytItemFmc,
  closytOutfitFmc,
  closytRegistrationFmc,
  closytEventFmc,
  closytTagFmc,
  closytFmc,
  closytUserFmc
} from "../common/models";
/*
 * 
 */
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

export const useClosytAuth = (
  isAuth0Authenticated: boolean,
  user: any,
  handleLogout: () => void,
  refetchAll: () => void,
  getAccessTokenSilently: () => Promise<string>
) => useQuery('auth', async () => {
  let token = await getAccessTokenSilently();
  // if not authenticated with auth0 return false
  if (!isAuth0Authenticated) return false;
  // Authenticate with closyt server
  return await closytUserFmc.handleRustAuth(user, token).then((data) => {
    // If not authenticated with closyt server logout and remove cookie
    console.log(data);
    if (!data) {
      handleLogout();
      Cookies.remove('loggedin');
      return false;
    }
    refetchAll();
    // set a cookie to prevent mutliple logins calls
    Cookies.set("loggedin", "true");
    return true;
  });
}, { enabled: !!isAuth0Authenticated });
/*
 * 
 */
export const hookItems = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('items', async () => {
  let token = await getAccessTokenSilently();
  return await closytItemFmc.fetchItems(token).then((data) => {
    return data;
  });
}, { enabled: false });

export const hookChangelog = () => useQuery('changelog', async () => {
  return await closytFmc.changelog().then((data) => {
    return data;
  });
}, { enabled: false });
/*
 * 
 */
export const hookTags = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('tags', async () => {
  let token = await getAccessTokenSilently();
  return await closytTagFmc.fetchTags(token).then((data) => {
    return data;
  });
}, { enabled: false });

export const hookAboutClosyt = () => useQuery('aboutClosyt', async () => {
  return await closytFmc.about().then((data) => {
    return data;
  });
}, { enabled: false });

export const hookClosytNotificaiton = () => useQuery('closytNotification', async () => {
  return await closytFmc.notifications().then((data) => {
    console.log(data);
    return data;
  });
}, { enabled: false });

/*
 * 
 */
export const hookOutfits = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('outfits', async () => {
  let token = await getAccessTokenSilently();
  return await closytOutfitFmc.fetchOutfits(token).then((data) => {
    return data;
  });
}, { enabled: false });
/*
 * 
 */
export const hookRegistrations = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('registrations', async () => {
  let token = await getAccessTokenSilently();
  return await closytRegistrationFmc.list(token).then((data) => {
    return data;
  });
}, { enabled: !!Cookies.get('loggedin') });
/*
*  Get all users for admin console
 */
export const hookClosytUsers = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('closytUsers', async () => {
  let token = await getAccessTokenSilently();
  return await closytUserFmc.list(token).then((data) => {
    return data;
  });
}, { enabled: !!Cookies.get('loggedin') });

export const hookEvents = (
  getAccessTokenSilently: () => Promise<string>
) => useQuery('events', async () => {
  let token = await getAccessTokenSilently();
  return await closytEventFmc.list(token).then((data) => {
    return data;
  });
}, { enabled: false });



