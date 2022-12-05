import { INPUT_SEARCH } from "../actions/actions";

function getInputSearch(value: string) {
  return {
    type: INPUT_SEARCH,
    inputSearch: value
  };
}

export default getInputSearch;