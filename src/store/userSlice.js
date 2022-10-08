import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    loggedUser: {},
  },
  reducers: {
    setUser: (state, action) => {
      const { activeUser } = action.payload;
      return {
        loggedUser: activeUser,
      };
    },
    updateUser: (state, action) => {
      state.loggedUser = {
        ...state.loggedUser,
        ...action.payload,
      };
    },
  },
});

export const { setUser,updateUser } = userSlice.actions;


