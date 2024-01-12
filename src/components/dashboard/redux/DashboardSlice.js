import { createSlice } from "@reduxjs/toolkit";
import { dashboardState } from "./DashboardState";
import { dashboardReducers } from "./DashboardReducers";

const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState: dashboardState,
    reducers: dashboardReducers
})

export const dashboardActions = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer