import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tutor-api.devple.net',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json;chartset=utf-8',
  },
});

export const apiClientWithInterceptor = axios.create({
  baseURL: 'https://tutor-api.devple.net',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8',
  },
});

apiClientWithInterceptor.interceptors.request.use(
  function (config) {
    const accessTokenObj = JSON.parse(
      localStorage.getItem('accessToken') || '{"accessToken": ""}'
    );
    const refreshTokenObj = {
      refresh:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20iLCJpYXQiOjE3MDYxMTk4NTYsImV4cCI6MTcwNzMyOTQ1Nn0.spDjZ9ELTtgO3WVLqxIu4zU3yFV34bofeWTDiw4iV3c',
    };

    const accessToken = accessTokenObj ? accessTokenObj.accessToken : '';
    const refreshToken = refreshTokenObj ? refreshTokenObj.refresh : '';

    config.headers['Authorization'] = `${accessToken}`; // 임시토큰 Bearer 로컬스토리지에 있습니다.
    config.headers['Refresh'] = `${refreshToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiClient;
