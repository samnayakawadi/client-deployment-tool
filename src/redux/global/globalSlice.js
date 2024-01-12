import { createSlice } from "@reduxjs/toolkit";
import { globalState } from "./globalState";
import { globalReducers } from "./globalReducers";

const globalSlice = createSlice({
    name: "Global Slice",
    initialState: globalState,
    reducers: globalReducers
})

export const globalActions = globalSlice.actions
export const globalReducer = globalSlice.reducer