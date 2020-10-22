import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Servers } from "../../types/servers";

const INITIAL_STATE: Servers = [];

export const serversSlice = createSlice({
  name: "servers",
  initialState: INITIAL_STATE,
  reducers: {
    fetchServersStart: (state) => state,
    fetchServersSuccess: (state, { payload }: PayloadAction<Servers>) => {
      console.log(payload);
      return (state = payload);
    },
  },
});

export const { fetchServersStart, fetchServersSuccess } = serversSlice.actions;
