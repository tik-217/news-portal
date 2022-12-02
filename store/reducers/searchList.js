import { SEARCH_LIST } from "../actions/actions";
import { searchListInitial } from "../initialState";

function searchListReducer(state = searchListInitial, action) {
  switch (action.type) {
    case SEARCH_LIST:
      return {
        ...state,
        filterArticles: action.filterArticles,
      };
    default:
      return {
        ...state,
      };
  }
}

export default searchListReducer;
