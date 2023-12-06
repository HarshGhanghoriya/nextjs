import { storeCustomSolutionDetails } from "@/api/Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  customSolution: [],
  loading: false,
  success: false,
  error: "",
};

const customSolutionSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    add(state, { type, payload }) {
      //   state.data = [...state.data, payload];
      //   state.loading = true;
      //   state.error = "no error";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveCustomSolutionDetails.pending, (state, action) => {
      state.loading = true;

      state.error = "";
    });
    builder.addCase(saveCustomSolutionDetails.fulfilled, (state, action) => {
      state.customSolution = action.payload;
      state.loading = false;
      state.success = true;
      state.error = "";
    });
    builder.addCase(saveCustomSolutionDetails.rejected, (state, action) => {
      state.error = "something went wrong";
      state.loading = false;
    });
  },
});
export const { add } = customSolutionSlice.actions;
export default customSolutionSlice.reducer;

export const saveCustomSolutionDetails = createAsyncThunk(
  "cosuomSolution/save",
  async (payload) => {
    return await storeCustomSolutionDetails(payload);
  }
);
