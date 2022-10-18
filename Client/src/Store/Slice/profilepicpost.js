import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostProfilepic = createAsyncThunk("Pic/ProfilePic", async(data) => {
  return axio.post(`/api/profilepicture`, {testImage:data});
});

const EventProfilepicture = createSlice({
    name: "Profileimg",
    initialState: {
        PicData: [],
        picLoading: true
    },
    extraReducers: {
        [PostProfilepic.pending]: (state, action) => {
            state.picLoading = true
        },
        [PostProfilepic.fulfilled]: (state, action) => {
            state.PicData = action.payload.data;
            state.picLoading = false
        },
        [PostProfilepic.rejected]: (state, action) => {
            state.picLoading = false
        }
    }
})

const addProfilepic = EventProfilepicture.reducer

export default addProfilepic

