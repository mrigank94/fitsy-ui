import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchDoctorById from "../../service/doctor";

export const fetchDoctor = createAsyncThunk("fetchDoctor", fetchDoctorById);

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctorInfo: {
      isLoading: false,
      isError: false,
      data: {},
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctor.pending, (state, action) => {
      state.doctorInfo.isLoading = true;
      state.doctorInfo.isError = false;
    });
    builder.addCase(fetchDoctor.fulfilled, (state, action) => {
      state.doctorInfo.isLoading = false;
      state.doctorInfo.isError = false;
      state.doctorInfo.data = action.payload;
    });
    builder.addCase(fetchDoctor.rejected, (state, action) => {
      state.doctorInfo.isLoading = false;
      state.doctorInfo.isError = true;
      state.doctorInfo.data = {};
    });
  },
});

export default doctorSlice.reducer;
