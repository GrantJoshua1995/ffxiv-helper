import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

// TODO: Add in saga functionality. Will just directly call store for now...

const store = configureStore({
  reducer: reducers,
});

export default store;
