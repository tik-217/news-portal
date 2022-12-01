import SEARCH_LIST from "../actions/actionSearchList";
import initialState from "../initialState";

function searchListReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LIST:
      return {
        ...state,
        filterArticles: action.filterArticles,
      };
    default:
      return {
        ...state
      };
  }
}

export default searchListReducer;
