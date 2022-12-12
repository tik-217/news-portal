import { CHANGE_ARTICLE } from "../actions/actions";
import { articleChangeInitial } from "../initialState";

function articleChange(state = articleChangeInitial, action) {
  switch (action.type) {
    case CHANGE_ARTICLE:
      return {
        ...state,
        article: action.article,
        changeMouseEvent: action.changeMouseEvent,
      };
    default:
      return {
        ...state
      };
  }
}

export default articleChange;