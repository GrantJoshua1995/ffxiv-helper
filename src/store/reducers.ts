import { combineReducers } from "@reduxjs/toolkit";
import { serversSlice } from "./servers";

const reducers = combineReducers({
  servers: serversSlice.reducer,
});

export default reducers;
