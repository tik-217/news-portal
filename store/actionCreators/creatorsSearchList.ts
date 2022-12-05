import { SEARCH_LIST } from "../actions/actions";
import { DispatchCreatorsFilter, ArticlesElement } from "../../types";

export const SLCreators = (value: ArticlesElement[]): DispatchCreatorsFilter => {
  console.log(value);
  
  return {
    type: SEARCH_LIST,
    filterArticles: value
  };
}