import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllSicknesses, {
  deleteSicknessService,
} from "../../service/sicknesses";

export const fetchSicknesses = createAsyncThunk(
  "fetchSicknesses",
  fetchAllSicknesses
);

export const deleteSickness = createAsyncThunk(
  "deleteSickness",
  deleteSicknessService
);

const sicknessSlice = createSlice({
  name: "sickness",
  initialState: {
    sicknessInfo: {
      isLoading: false,
      isError: false,
      data: [],
    },
    selectedSicknessId: null,
  },
  reducers: {
    setSelectedSickness(state, { payload }) {
      state.selectedSicknessId = payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSicknesses.pending, (state, action) => {
      state.sicknessInfo.isLoading = true;
      state.sicknessInfo.isError = false;
    });
    builder.addCase(fetchSicknesses.fulfilled, (state, action) => {
      state.sicknessInfo.isLoading = false;
      state.sicknessInfo.isError = false;
      state.sicknessInfo.data = action.payload;
    });
    builder.addCase(fetchSicknesses.rejected, (state, action) => {
      state.sicknessInfo.isLoading = false;
      state.sicknessInfo.isError = true;
      state.sicknessInfo.data = [];
    });
    builder.addCase(deleteSickness.fulfilled, (state, action) => {
      const deletedId = action.payload;
      state.sicknessInfo.data = state.sicknessInfo.data.filter(
        (sickness) => sickness._id !== deletedId
      );
    });
  },
});

export const { setSelectedSickness } = sicknessSlice.actions;

export default sicknessSlice.reducer;
