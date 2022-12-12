import { CHANGE_ARTICLE } from "../actions/actions";

function articleChange(value, changeMouseEvent, setChangeMouseEvent) {
  return {
    type: CHANGE_ARTICLE,
    article: value,
    changeMouseEvent,
    setChangeMouseEvent,
  };
}

export default articleChange;