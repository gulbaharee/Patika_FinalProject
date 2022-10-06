import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
  },
  reducers: {
    setContacts: (state, action) => {
      const newContacts = [...state.contactList];
      newContacts.push(action.payload);
      return {
        contactList: newContacts,
      };
    },
  },
});

export const {setContacts} = contactSlice.actions;
