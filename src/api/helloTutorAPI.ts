import HttpClient from "./httpClient";

export default class HelloTutorAPI {
  constructor(private httpClient: HttpClient) {}

  async search(keyword = "") {
    return keyword ? this.searchByKeyword(keyword) : this.getGeneralPosts();
  }

  private async searchByKeyword(keyword: string) {
    return this.httpClient.search(keyword);
  }

  private async getGeneralPosts() {
    return this.httpClient.search();
  }
}
