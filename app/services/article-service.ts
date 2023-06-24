import axios from "../lib/axios";
const BASE_PATH = "/api/articles";

export default class ArticleService {
  static getArticles() {
    return axios.get(`${BASE_PATH}`);
  }
}
