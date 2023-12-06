import { configureStore } from "@reduxjs/toolkit";

// import productReducer from "./slice/AddProduct";
import ContactUs from "./slices/ContactUs";
import NewsLetter from "./slices/NewsLetter";
import blogSlice from "./slices/Blogs";
const store = configureStore({
  reducer: {
    contact: ContactUs,
    newsLetter: NewsLetter,
    Blog: blogSlice,
  },
});

export default store;
