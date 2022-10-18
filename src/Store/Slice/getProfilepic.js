import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetProfilepic = createAsyncThunk("get/ProfilePic", async() => {
  return axio.get(`/api/userimage`);
});

const profilepicture = createSlice({
    name: "userpicture",
    initialState: {
        userImage: [],
        userImageloading: true
    },
    extraReducers: {
        [GetProfilepic.pending]: (state, action) => {
            state.userImageloading = true
        },
        [GetProfilepic.fulfilled]: (state, action) => {
            state.userImage = action.payload.data.data;
            state.userImageloading = false
        },
        [GetProfilepic.rejected]: (state, action) => {
            state.userImageloading = false
        }
    }
})

const UserProfilepic = profilepicture.reducer;

export default UserProfilepic
