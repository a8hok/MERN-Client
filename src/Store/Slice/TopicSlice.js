import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getTopicInfo = createAsyncThunk("Topics", async () => {
  return axio.get(`/api/topics`);
});

export const topicReducer = createSlice({
  name: "topics",
  initialState: {
    topicData: [],
    topicLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getTopicInfo.pending]: (state, action) => {
      state.topicLoading = true;
    },
    [getTopicInfo.fulfilled]: (state, action) => {
      state.topicData = action.payload.data.data;
      state.topicLoading = false;
    },
    [getTopicInfo.rejected]: (state, action) => {
      state.topicLoading = false;
    },
  },
});

export default topicReducer.reducer;
