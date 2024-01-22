import { TutorDataTypes } from "@/typings/user";
import apiClient from "@/utils/api-client";

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
