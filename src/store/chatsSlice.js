import {createSlice} from '@reduxjs/toolkit';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    chatList: [],
  },
  reducers: {
    setChats: (state, action) => {
      const newChats = [...state.chatList];
      newChats.push(action.payload);
      return {
        chatList: newChats,
      };
    },
  },
});

export const {setChats} = chatsSlice.actions;
