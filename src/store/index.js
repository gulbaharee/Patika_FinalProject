import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import {themeSlice} from './themeSlice';
import {authSlice} from './authSlice';
import {contactSlice} from './contactSlice';
import {chatsSlice} from './chatsSlice';
import { chatContentSlice } from './chatcontentSlice';

export const store = configureStore({
  reducer: combineReducers({
    activeUser: userSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    contacts: contactSlice.reducer,
    chats: chatsSlice.reducer,
    chatContent:chatContentSlice.reducer,
  }),
});
