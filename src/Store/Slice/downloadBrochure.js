import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getBrochureToDownload = createAsyncThunk("pdf/brochure", async (filename) => {
  const response = await axio.get(`/api/download/${filename}`)
  return response
});

const brochureDownloadingPDF = createSlice({
    name: "brochurePDFdownload",
    initialState: {
        brochurePDFdata: [],
        brochurePDFloading: true,
      },
    extraReducers: {
        [getBrochureToDownload.pending]: (state, action) => {
            state.brochurePDFloading = true
        },
        [getBrochureToDownload.fulfilled]: (state, action) => {
            state.brochurePDFdata = action.payload.data;
            state.brochurePDFloading = false
        },
        [getBrochureToDownload.rejected]: (state, action) => {
            state.brochurePDFloading = false
        }
    }
})

const PDFBrochureDownloadDetails = brochureDownloadingPDF.reducer;

export default PDFBrochureDownloadDetails;
