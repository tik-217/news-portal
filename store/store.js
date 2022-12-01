import { configureStore } from '@reduxjs/toolkit';
import reducerSearchList from "./reducers/reducerSearhList";

// const store = configureStore();
export const store = configureStore({ reducer: reducerSearchList });