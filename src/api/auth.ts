import { TutorDataTypes } from '@/typings/user';
import apiClient, { apiClientWithInterceptor } from '@/utils/api-client';

export const signupTutor = async (userParms: TutorDataTypes) => {
  return await apiClient
    .post('/auth/user/tutor', userParms)
    .then((data) => data.data);
};

export const signupTutee = async (
  userParms: Omit<TutorDataTypes, 'subject'>
) => {
  return await apiClient
    .post('/auth/user/tutee', userParms)
    .then((data) => data.data);
};

export const signin = async (
  userParms: Pick<TutorDataTypes, 'email' | 'pw'>
) => {
  return await apiClient
    .post('/auth/login', userParms)
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
