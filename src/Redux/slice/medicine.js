import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchMedicineById from "../../service/medicine";

export const fetchMedicine = createAsyncThunk(
  "fetchMedicine",
  fetchMedicineById
);

const medicineSlice = createSlice({
  name: "medicine",
  initialState: {
    medicineInfo: {
      isLoading: false,
      isError: false,
      data: {},
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedicine.pending, (state, action) => {
      state.medicineInfo.isLoading = true;
      state.medicineInfo.isError = false;
    });
    builder.addCase(fetchMedicine.fulfilled, (state, action) => {
      state.medicineInfo.isLoading = false;
      state.medicineInfo.isError = false;
      state.medicineInfo.data = action.payload;
    });
    builder.addCase(fetchMedicine.rejected, (state, action) => {
      state.medicineInfo.isLoading = false;
      state.medicineInfo.isError = true;
      state.medicineInfo.data = {};
    });
  },
});

export default medicineSlice.reducer;
