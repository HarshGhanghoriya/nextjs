import { saveContactDetail } from "@/api/Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  contact: [],
  loading: false,
  success: false,
  error: "",
};

const contactSlice = createSlice({
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
    builder.addCase(saveContact.pending, (state, action) => {
      state.loading = true;

      state.error = "";
    });
    builder.addCase(saveContact.fulfilled, (state, action) => {
      state.contact = action.payload;
      state.loading = false;
      state.success = true;
      state.error = "";
    });
    builder.addCase(saveContact.rejected, (state, action) => {
      state.error = "something went wrong";
      state.loading = false;
    });
  },
});
export const { add } = contactSlice.actions;
export default contactSlice.reducer;

export const saveContact = createAsyncThunk("contact/save", async (payload) => {
  return await saveContactDetail(payload);
});
