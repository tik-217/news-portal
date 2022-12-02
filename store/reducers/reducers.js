import { combineReducers } from 'redux';

import accountChangeArticle from "./articleChange";
import searchListReducer from "./searchList";

const rootReducer = combineReducers({
  filterArticles: searchListReducer,
  article: accountChangeArticle,
})

export default rootReducer;