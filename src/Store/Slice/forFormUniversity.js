import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postPDFUniversities = createAsyncThunk("pdfUniv",async (data) => {
    const formdata = new FormData()
    formdata.append("S_No", data.S_No);
    formdata.append("State", data.State);
    formdata.append("Type", data.Type);
    formdata.append("Yrofestab", data.Yrofestab);
    formdata.append("Location_Coordinates", data.Location_Coordinates);
    formdata.append("Name", data.Name);
    formdata.append( "Name_1", data.Name_1);
    formdata.append("City", data.City);
    formdata.append("District", data.District);
    formdata.append("PIN", data.PIN);
    formdata.append("url", data.url);
    formdata.append("Phone", data.Phone);
    formdata.append("Village", data.Village);
    formdata.append( "Email", data.Email);
    formdata.append("Image", data.Image);
    formdata.append("Logo", data.Logo);
    formdata.append("AboutCollege", data.AboutCollege);
    formdata.append( "coursesOffered", data.coursesOffered);
    formdata.append("brochure", data.brochure);

    const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
    }

    return await axio.post(`/api/formuniv`, formdata, config)

  });

const postPDFUniversitiesReducer = createSlice({
  name: "form/univ-PDF",
  initialState: {
    postPDFUniversitiesData: [],
    PDFUnivloading: false,
  },
  extraReducers: {
    [postPDFUniversities.pending]: (state, action) => {
      state.PDFUnivloading = true;
    },
    [postPDFUniversities.fulfilled]: (state, action) => {
      state.postPDFUniversitiesData = action.payload.data;
      state.PDFUnivloading = false;
    },
    [postPDFUniversities.rejected]: (state, action) => {
      state.PDFUnivloading = false;
    },
  },
});

const PDFunivSlice = postPDFUniversitiesReducer.reducer;

export default PDFunivSlice;
