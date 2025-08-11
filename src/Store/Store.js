import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./AuthSlice"
import coursesreducer from "./CourseSlice"
import coursedetailreducer from "./SingleCourseSlice"

const store = configureStore({
    reducer: {
        authreducer,
        coursesreducer,
        coursedetailreducer
    }
})

export default store;