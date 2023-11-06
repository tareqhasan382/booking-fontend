import { authKey } from "@/constants/storageKey";
import { getFromLocalStorage, setToLocalStorage } from "./local-storage";
import { instance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodedToken } from "./jwt";

export const storeUserInfo = ({ token }: { token: string }) => {
  // console.log("AccessToken:", token);
  // localStorage.setItem(authKey, token);
  return setToLocalStorage(authKey, token as string);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await instance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
