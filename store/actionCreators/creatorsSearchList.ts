import { SEARCH_LIST } from "../actions/actions";
import { dispatchFilterArticles, ArticlesElement } from "../../types";

export const SLCreators = (value: ArticlesElement[]): dispatchFilterArticles => {
  return {
    type: SEARCH_LIST,
    filterArticles: value
  };
}