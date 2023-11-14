import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../reducers/userSlice";

export default configureStore({
    reducer: {
        dataCommon: useReducer,
    },
});

