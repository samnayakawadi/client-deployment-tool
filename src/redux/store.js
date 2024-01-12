import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../components/dashboard/redux/DashboardSlice";

export const store = configureStore({
    reducer: {
        "dashboard": dashboardReducer
    }
})