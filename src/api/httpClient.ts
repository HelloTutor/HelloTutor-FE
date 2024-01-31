import axios, { AxiosInstance } from "axios";

export default class HttpClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://tutor-api.devple.net",
    });
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
}
