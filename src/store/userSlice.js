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
  },
});

export const { setUser } = userSlice.actions;


