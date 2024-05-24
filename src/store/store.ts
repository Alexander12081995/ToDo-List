import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducers from "./slice";

export const store = configureStore({
  reducer: {
    todos: todoSliceReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
