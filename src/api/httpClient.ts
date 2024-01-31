import axios, { AxiosInstance } from "axios";

interface Post {
  title: string;
  content: Array<any>;
}

export default class HttpClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://tutor-api.devple.net",
    });
    this.setInterceptor();
  }

  /**
   *
   * @param keyword - 검색어
   * @returns
   * @description
   * page와 pageSize는 현재 변경되지 않습니다.
   */
  async search(keyword = "") {
    return this.httpClient.get(`/free?page=1&pageSize=10&search=${keyword}`);
  }

  async createFreeBoard(params: Post) {
    return this.httpClient.post("/free", params);
  }

  // 임시 코드입니다. 백엔드 협의되면 수정하겠습니다.
  private setInterceptor() {
    this.httpClient.interceptors.request.use(
      function (config) {
        config.headers["Authorization"] = sessionStorage.getItem("accessToken"); // 임시토큰 Bearer 로컬스토리지에 있습니다.
        config.headers["Refresh"] = sessionStorage.getItem("refreshToken");
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    this.httpClient.interceptors.response.use(
      (res) => {
        const newAccessToken = res.headers["Authorization"];
        if (newAccessToken) {
          sessionStorage.setItem(
            "accessToken",
            JSON.stringify({ accessToken: newAccessToken }),
          );
        }
        return res;
      },
      async (err) => {
        // 리프레쉬 토큰 만료시 동작관련 스크럼 필요
        try {
          sessionStorage.removeItem("accessToken");
          sessionStorage.removeItem("refreshToken");
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.reject(err);
      },
    );
  }
}
