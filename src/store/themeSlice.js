import {createSlice} from '@reduxjs/toolkit';
import light from './themes/light';
import dark from './themes/dark';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    defaultTheme: light,
  },
  reducers: {
    setTheme: (state) => {
      return {
        defaultTheme: state.defaultTheme.type === light.type ? dark : light,
      };
    },
  },
});

export const {setTheme} = themeSlice.actions;
