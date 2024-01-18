import { createSlice } from "@reduxjs/toolkit";
import { clientState } from "./ClientState";
import { clientReducers } from "./ClientReducers";

const clientSlice = createSlice({
    name: "clientSlice",
    initialState: clientState,
    reducers: clientReducers
})

export const clientActions = clientSlice.actions
export const clientReducer = clientSlice.reducer