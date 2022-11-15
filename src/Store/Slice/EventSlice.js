import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEventInfo = createAsyncThunk("Events", async () => {
  return axio.get(`/api/events`);
});

const eventsReducers = createSlice({
  name: "events",
  initialState: {
    eventsData: [],
    eventLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getEventInfo.pending]: (state, action) => {
      state.eventLoading = true;
    },
    [getEventInfo.fulfilled]: (state, action) => {
      state.eventsData = action.payload.data.data;
      state.eventLoading = false;
    },
    [getEventInfo.rejected]: (state, action) => {
      state.eventLoading = false;
    },
  },
});

export default eventsReducers.reducer;
