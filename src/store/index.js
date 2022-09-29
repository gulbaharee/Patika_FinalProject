import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: combineReducers({
    activeUser: userSlice.reducer,
  }),
});