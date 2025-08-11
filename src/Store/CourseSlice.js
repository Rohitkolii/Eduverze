import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name:"courses",
    initialState: {
        courses: [],
        isLoading: false,
        isError: false
    },

    reducers: {
        getCourses: (state, action)=> {
            state.courses = action.payload.data;
            // console.log(action.payload.data);
        }
    }
})

export const {getCourses} = courseSlice.actions
export default courseSlice.reducer

export const fetchCourses = ()=> {
    return async function fetchCoursesThunk(dispatch, getState) {
        try {
            const response = await fetch("http://localhost:3001/api/courses/courseslist")
            const courses = await response.json()
            dispatch(getCourses(courses))
            // console.log(courses);
        } catch (error) {
            console.warn(error)
        }
    }
}