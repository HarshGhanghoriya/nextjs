import api from "@/api/Axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  bg:false,
};

export const getBlogs = createAsyncThunk(
  "getBlog",
  async (args, { rejectWithValue }) => {
    try {
      const response = await api.get(`/blog/?id=${args ? args : ""}`);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    bgChange: (state, action) => {
      state.bg = action.payload
    },
  },
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action?.payload?.data?.Data?.results;
      state.loading = false;
    },
    [getBlogs.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const {bgChange} = blogSlice.actions ;
export default blogSlice.reducer;
