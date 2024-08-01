import { configureStore } from "@reduxjs/toolkit";
import authSlice, { login } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // TODO : add more Slices here for posts
  },
});

export default store;
