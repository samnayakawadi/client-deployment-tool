import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../components/dashboard/redux/DashboardSlice";
import { globalReducer } from "./global/globalSlice";
import { clientReducer } from "../components/editor/client/redux/ClientSlice";

export const store = configureStore({
    reducer: {
        "dashboard": dashboardReducer,
        "global": globalReducer,
        "clientEditor": clientReducer
    }
})