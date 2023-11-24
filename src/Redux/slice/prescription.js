import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPrescriptionById from "../../service/prescription";

export const fetchPrescription = createAsyncThunk(
  "fetchPrescription",
  fetchPrescriptionById
);

const prescriptionSlice = createSlice({
  name: "prescription",
  initialState: {
    prescriptionInfo: {
      isLoading: false,
      isError: false,
      data: {},
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrescription.pending, (state, action) => {
      state.prescriptionInfo.isLoading = true;
      state.prescriptionInfo.isError = false;
    });
    builder.addCase(fetchPrescription.fulfilled, (state, action) => {
      state.prescriptionInfo.isLoading = false;
      state.prescriptionInfo.isError = false;
      state.prescriptionInfo.data = action.payload;
    });
    builder.addCase(fetchPrescription.rejected, (state, action) => {
      state.prescriptionInfo.isLoading = false;
      state.prescriptionInfo.isError = true;
      state.prescriptionInfo.data = {};
    });
  },
});

export default prescriptionSlice.reducer;
