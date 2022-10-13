import { configureStore } from '@reduxjs/toolkit';
import webConfigSlice from "./webConfigSlice";

export const store = configureStore({
  reducer: {
    webConfig: webConfigSlice,
  },
});
