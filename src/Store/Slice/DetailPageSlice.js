import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const  course= createAsyncThunk("Detail", async () => {
  return axio.get(`/authenticate/detailpage`);
});

export const courseReducer = createSlice({
  name: "Detail",
  initialState: {
    courseDetail: [],
    loading: false,
    
  },
  reducer: {},
  extraReducers: {
    [course.pending]: (state, action) => {
      state.loading = true;
    },
    [course.fulfilled]: (state, action) => {
      state.courseDetail= action.payload.data;
      state.loading = false;
    },
    [course.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const courseInfo = courseReducer.reducer;

export default courseInfo;
