import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchHospitalById from "../../service/hospital";

export const fetchHospital = createAsyncThunk(
  "fetchHospital",
  fetchHospitalById
);

const hospitalSlice = createSlice({
  name: "hospital",
  initialState: {
    hospitalInfo: {
      isLoading: false,
      isError: false,
      data: {},
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHospital.pending, (state, action) => {
      state.hospitalInfo.isLoading = true;
      state.hospitalInfo.isError = false;
    });
    builder.addCase(fetchHospital.fulfilled, (state, action) => {
      state.hospitalInfo.isLoading = false;
      state.hospitalInfo.isError = false;
      state.hospitalInfo.data = action.payload;
    });
    builder.addCase(fetchHospital.rejected, (state, action) => {
      state.hospitalInfo.isLoading = false;
      state.hospitalInfo.isError = true;
      state.hospitalInfo.data = {};
    });
  },
});

export default hospitalSlice.reducer;
