import { saveContactDetail, saveNewsLetterDetails } from "@/api/Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  newsLetter: {},
  loading: false,
  success: false,
  error: "",
};

const newsLetterSlice = createSlice({
  name: "newsLetter",
  initialState,
  reducers: {
    add(state, { type, payload }) {
      //   state.data = [...state.data, payload];
      //   state.loading = true;
      //   state.error = "no error";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveNewsLetterEmail.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(saveNewsLetterEmail.fulfilled, (state, action) => {
      state.newsLetter = action.payload;
      state.loading = false;
      state.success = true;
      state.error = "";
    });
    builder.addCase(saveNewsLetterEmail.rejected, (state, action) => {
      state.error = "something went wrong";
      state.loading = false;
    });
  },
});
export const { add } = newsLetterSlice.actions;
export default newsLetterSlice.reducer;

export const saveNewsLetterEmail = createAsyncThunk(
  "newsletter/save",
  async (payload) => {
    return await saveNewsLetterDetails(payload);
  }
);
