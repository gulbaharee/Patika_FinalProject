import {createSlice} from '@reduxjs/toolkit';

export const chatContentSlice = createSlice({
  name: 'chatContent',
  initialState: {
    chatContentList: [],
  },
  reducers: {
    setChatcontent: (state, action) => {
      const newChats = [...state.chatContentList];
      newChats.push(action.payload);
      return {
        chatContentList: newChats,
      };
    },
  },
});

export const {setChatcontent} = chatContentSlice.actions;
