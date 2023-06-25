import axios from '../lib/axios';
import ParamFormatUtil from '../utils/param-format-util';
const BASE_PATH = '/api/articles';

export default class ArticleService {
  static getArticles(articlePaginationParams: ArticlePaginationParams) {
    return axios.get(`${BASE_PATH}`, {
      params: ParamFormatUtil.recreateParamSkipNullAttributes(
        articlePaginationParams
      ),
    });
  }
  static getArticlesBasedOnPreferences(paginationParams: PaginationParams) {
    return axios.get(`${BASE_PATH}/for-you`, {
      params: ParamFormatUtil.recreateParamSkipNullAttributes(paginationParams),
    });
  }
  static getCategories() {
    return axios.get(`${BASE_PATH}/categories`);
  }
  static getSources() {
    return axios.get(`${BASE_PATH}/sources`);
  }
  static getAuthors() {
    return axios.get(`${BASE_PATH}/authors`);
  }
}
