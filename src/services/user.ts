import { UseMutationResult, useMutation } from "react-query";
import { axiosClient } from "../config/axios";
import { UserAttr } from "./common/types";

const USER_KEY = "users";
const USERS_ENDPOINT = "api/user/login";

type LoginParams = {
  email: string;
  password: string;
};

const useLogin = (): UseMutationResult<UserAttr, unknown, LoginParams> => {
  const queryResult = useMutation(
    [USER_KEY],
    async ({ email, password }: LoginParams) => {
      const response = await axiosClient.post<UserAttr>(USERS_ENDPOINT, {
        email,
        password,
      });

      window.localStorage.setItem(
        "token-store",
        response.data.responseData.token
      );
      window.localStorage.setItem(
        "expired-token",
        JSON.stringify(response.data.responseData.expireDate)
      );

      return response.data;
    },
    { onError: (error) => console.log(error) }
  );
  return queryResult;
};

export { useLogin };
