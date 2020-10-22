import { combineReducers } from "@reduxjs/toolkit";
import { serversSlice } from "./servers/servers.slice";

const reducers = combineReducers({
  servers: serversSlice.reducer,
});

export default reducers;
