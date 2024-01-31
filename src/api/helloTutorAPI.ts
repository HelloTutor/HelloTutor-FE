import HttpClient from "./httpClient";

interface Post {
  title: string;
  content: Array<any>;
}

export default class HelloTutorAPI {
  constructor(private httpClient: HttpClient) {}

  async search(keyword = "") {
    return keyword ? this.searchByKeyword(keyword) : this.getGeneralPosts();
  }

  async postFree(params: Post) {
    return this.createFreeBoard(params);
  }

  private async searchByKeyword(keyword: string) {
    return this.httpClient.search(keyword);
  }

  private async getGeneralPosts() {
    return this.httpClient.search();
  }

  private async createFreeBoard(params: Post) {
    return this.httpClient.createFreeBoard(params);
  }
}
