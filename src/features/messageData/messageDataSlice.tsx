import {createSlice} from '@reduxjs/toolkit';

const messageDataSlice = createSlice({
  name: 'messageData',
  initialState: '',
  reducers: {
    initial: (state, action) => {
        return action.payload;
    },
  },
});

export const {initial} = messageDataSlice.actions;

export default messageDataSlice.reducer;
