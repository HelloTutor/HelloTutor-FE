import { User } from "@/typings/user";
import apiClient from "@/utils/api-client";

export const signup = async (userParms: User) => {
  return await apiClient
    .post("/auth/user/tutor", userParms)
    .then((data) => data.data);
};
