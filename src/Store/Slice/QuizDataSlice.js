import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuizData = createAsyncThunk("QuizAnswers", async (allValues) => {
  // console.log(allValues)
  return axio.get(`/api/getfilteredquiz?TypeOfAssessment=${allValues.typeOf}&CourseTitle=${allValues.mainDomain}&CognitiveLevel=${allValues.difficulty}`);
});
export const getQuizDataReducer = createSlice({
  name: "QuizAnswers",
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
