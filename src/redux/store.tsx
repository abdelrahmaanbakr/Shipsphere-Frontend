// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeRedux/themeSlice";
import navigationReducer from "./navigateRedux/navigateSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;