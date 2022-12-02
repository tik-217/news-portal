import { CHANGE_ARTICLE } from "../actions/actions";

function articleChange(value) {
  return {
    type: CHANGE_ARTICLE,
    article: value
  };
}

export default articleChange;