import SEARCH_LIST from "../actions/actionSearchList";

function SLCreators(value) {
  return {
    type: SEARCH_LIST,
    filterArticles: value
  };
}

export default SLCreators;