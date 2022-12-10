import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const editingEvent = createAsyncThunk("EditEvent", async(data) => {
    const formdata = new FormData()
    formdata.append("eventId", data.eventId);
    formdata.append("eventName", data.eventName);
    formdata.append("eventDescription", data.eventDescription);
    formdata.append("eventDate", data.eventDate);
    formdata.append("eventTime", data.eventTime);
    formdata.append("author", data.author);
    formdata.append("status", data.status);

    const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

    await axio.put(`/api/editevent`,formdata, config)
})

const editEventReducer = createSlice({
    name: "eventEditor",
    initialState: {
        editedEventData: [],
        editEventLoading: true,
    },
    reducer: {},
    extraReducers:{
        [editingEvent.pending]: (state, action) => {
            state.editEventLoading = true;
        },
        [editingEvent.fulfilled]: (state, action) => {
            state.editEventLoading = false;
            state.editedEventData = action.payload;
        },
        [editingEvent.rejected]: (state, action) => {
            state.editEventLoading = false;
        }
    }
})

const editedEventReducer = editEventReducer.reducer;

export default editedEventReducer
