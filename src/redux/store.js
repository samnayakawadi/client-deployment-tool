import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../components/dashboard/redux/DashboardSlice";
import { globalReducer } from "./global/globalSlice";

export const store = configureStore({
    reducer: {
        "dashboard": dashboardReducer,
        "global": globalReducer
    }
})