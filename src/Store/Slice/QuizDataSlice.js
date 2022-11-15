import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuizData = createAsyncThunk("Quiz", async () => {
  return axio.get("/api/quizdata");
});
export const getQuizDataReducer = createSlice({
  name: "Quiz",
  initialState: {
    quizInfo: [],
    getQuizDataLoading: true,
  },
  extraReducers: {
    [getQuizData.pending]: (state, action) => {
      state.getQuizDataLoading = true;
    },
    [getQuizData.fulfilled]: (state, action) => {
      state.getQuizDataLoading = false;
      state.quizInfo = action.payload;
    },
    [getQuizData.pending]: (state, action) => {
      state.getQuizDataLoading = false;
    },
  },
});

export default getQuizDataReducer.reducer;
