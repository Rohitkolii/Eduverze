import { createSlice } from "@reduxjs/toolkit";

const SingleCourseSlice = createSlice({
    name: "Single Course",
    initialState: {
        courseDetail: {},
        isLoading: false,
        isError: false,
    },

    reducers: {
        getCurrentCourse: (state, action)=> {
            state.courseDetail = action.payload;
        }
    }
})

export const {getCurrentCourse} = SingleCourseSlice.actions;
export default SingleCourseSlice.reducer;

export function fetchSingleCourse(id){
    return async function fetchSingleCourseThunk(dispatch, getState){
        // console.log(id);
        try {
            const response = await fetch(`http://localhost:3001/api/courses/currentcourse/${id}`)
            const SingleCourse = await response.json();
            // console.log(SingleCourse);
            dispatch(getCurrentCourse(SingleCourse))
        } catch (error) {
            console.error(error)
        }
    }
}