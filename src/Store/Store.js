import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./AuthSlice"

const store = configureStore({
    reducer: {
        authreducer,
    }
})

export default store;