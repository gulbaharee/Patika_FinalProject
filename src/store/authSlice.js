import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      return {user: true};
    },
    signOut: (state, action) => {
      return {user: false};
    },
  },
});

export const {signIn, signOut} = authSlice.actions;
