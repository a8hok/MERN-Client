import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostEventData = createAsyncThunk("EventData", async (data) => {
  // console.log(data.files)
  const formdata = new FormData()
        formdata.append("eventName", data.eventName);
        formdata.append("eventDescription", data.eventDescription);
        formdata.append("eventDate", data.eventDate);
        formdata.append("eventTime", data.eventTime);
        formdata.append( "eventImage", data.files);

        const config = {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }

  await axio.post("/api/post-event",formdata, config);
});

export const EventDataReducer = createSlice({
  name: "EventData",
  initialState: {
    eventData: [],
    eventpostloading: false,
  },
  reducer: {},
  extraReducers: {
    [PostEventData.pending]: (state, action) => {
      state.eventpostloading = true;
    },
    [PostEventData.fulfilled]: (state, action) => {
      state.eventpostloading = false;
      state.eventData = action.payload;
    },
    [PostEventData.rejected]: (state, action) => {
      state.eventpostloading = false;
    },
  },
});



const addEventReducer = EventDataReducer.reducer;
export default addEventReducer;