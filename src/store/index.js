import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import {themeSlice} from './themeSlice';
import {authSlice} from './authSlice';

export const store = configureStore({
  reducer: combineReducers({
    activeUser: userSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
  }),
});
