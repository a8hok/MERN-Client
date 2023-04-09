import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostAdvertisement = createAsyncThunk("Advertisement", async (data) => {
  const formdata = new FormData()
        formdata.append("Title", data.Title);
        formdata.append("catagory", data.catagory);
        formdata.append("subCatagory", data.subCatagory);
        formdata.append("timeScreening", data.timeScreening);
        formdata.append("userEmail", data.userEmail);
        formdata.append("status", data.status);
        formdata.append( "adImage", data.files);

        const config = {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }

  await axio.post("/api/post-advertisement",formdata, config);
});

export const AdvertisementReducer = createSlice({
  name: "Advertisement",
  initialState: {
    AdvertisementData: [],
    Advertisementpostloading: false,
  },
  reducer: {},
  extraReducers: {
    [PostAdvertisement.pending]: (state, action) => {
      state.Advertisementpostloading = true;
    },
    [PostAdvertisement.fulfilled]: (state, action) => {
      state.Advertisementpostloading = false;
      state.Advertisementdata = action.payload;
    },
    [PostAdvertisement.rejected]: (state, action) => {
      state.Advertisementpostloading = false;
    },
  },
});



const addAdvertisementReducer = AdvertisementReducer.reducer;
export default addAdvertisementReducer;