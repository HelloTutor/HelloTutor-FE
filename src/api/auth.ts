import { MyAccountTypes, TutorDataTypes } from "@/typings/user";
import apiClient, { apiClientWithInterceptor } from "@/utils/api-client";

export const signupTutor = async (userParms: TutorDataTypes) => {
  return await apiClient
    .post("/auth/user/tutor", userParms)
    .then((data) => data.data);
};

export const signupTutee = async (
  userParms: Omit<TutorDataTypes, "subject">
) => {
  return await apiClient
    .post("/auth/user/tutee", userParms)
    .then((data) => data.data);
};

export const signin = async (
  userParms: Pick<TutorDataTypes, "email" | "pw">
) => {
  return await apiClient
    .post("/auth/login", userParms)
    .then((data) => data.data);
};

export const writeContent = async (
  path: string,
  params: { title: string; content: Array<Object> }
) => {
  return await apiClientWithInterceptor
    .post(path, params)
    .then((data) => data.data);
};

export const resign = async () => {
  return await apiClient
    .delete(`/myPage/setting`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        refresh: `${sessionStorage.getItem("refreshToken")}`,
      },
    })
    .then((data) => data.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const updateUserInfo = async (userParms: MyAccountTypes) => {
  return await apiClient
    .put(`/myPage/setting`, userParms, {
      headers: {
        Authorization: `${sessionStorage.getItem("accessToken")}`,
        refresh: `${sessionStorage.getItem("refreshToken")}`,
        withCredentials: true,
      },
    })
    .then((data) => data.data)
    .catch((error) => {
      throw new Error(error);
    });
};
