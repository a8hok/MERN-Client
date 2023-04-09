import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postPDFColleges = createAsyncThunk("pdfCol", async (data) => {
    const formdata = new FormData()
    formdata.append("SNo", data.SNo);
    formdata.append("c_id", data.c_id);
    formdata.append("State", data.State);
    formdata.append("college_District", data.college_District);
    formdata.append("Yrofestab", data.Yrofestab);
    formdata.append("College_Name", data.College_Name);
    formdata.append( "Specialisation", data.Specialisation);
    formdata.append("Type", data.Type);
    formdata.append("url", data.url);
    formdata.append("Phone", data.Phone);
    formdata.append("Email", data.Email);
    formdata.append("location_coordinates", data.location_coordinates);
    formdata.append("Image_Gallery", data.Image_Gallery);
    formdata.append( "Logo", data.Logo);
    formdata.append("About", data.About);
    formdata.append("fB", data.fB);
    formdata.append("tR", data.tR);
    formdata.append( "yT", data.yT);
    formdata.append("iG", data.iG);
    formdata.append( "LinkedIn", data.LinkedIn);
    formdata.append("coursesOffered", data.coursesOffered);
    formdata.append("brochureCol", data.brochureCol);
    //

    const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
    }

    return await axio.post(`/api/postCollegeWIthPDF`, formdata, config)

});

const postPDFColReducer = createSlice({
    name: "form/col-PDF",
    initialState: {
        postPDFColData: [],
        PDFColLoading: false
    },
    extraReducers: {
        [postPDFColleges.pending]: (state, action) => {
          state.PDFColLoading = true;
        },
        [postPDFColleges.fulfilled]: (state, action) => {
          state.postPDFColData = action.payload.data;
          state.PDFColLoading = false;
        },
        [postPDFColleges.rejected]: (state, action) => {
          state.PDFColLoading = false;
        },
      },
})

const PDFColSlice = postPDFColReducer.reducer;

export default PDFColSlice;
