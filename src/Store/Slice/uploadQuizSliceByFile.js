import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postQuizDataByFile = createAsyncThunk("QuizXLSX", async (data) => {
  return axio.post("/api/addquizbyfile", data);
});
export const UploadFileQuizReducer = createSlice({
  name: "QuizXLSX",
  initialState: {
    quizDataByXLSX: [],
    quizLoadingbyFile: true,
  },
  extraReducers: {
    [postQuizDataByFile.pending]: (state, action) => {
      state.quizLoadingbyFile = true;
    },
    [postQuizDataByFile.fulfilled]: (state, action) => {
      state.quizDataByXLSX = action.payload;
      state.quizLoadingbyFile = false;
    },
    [postQuizDataByFile.rejected]: (state, action) => {
      state.quizLoadingbyFile = false;
    },
  },
});
export default UploadFileQuizReducer.reducer;
