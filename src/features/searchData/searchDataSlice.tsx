import {createSlice} from '@reduxjs/toolkit';

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    items: [
      {
        id: 'Conversation Skills',
        active: false,
      },
    ],
  },
  reducers: {
    change: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
        if(item)
        {
          item.active = !item.active;
        }
    },
    initial: (state, action) => {
      const item =state.items.find(item => item.id === action.payload)
      if (!item) {
        state.items.push({id: action.payload, active: false});
      }
    },
  },
});

export const {change, initial} = searchDataSlice.actions;
export default searchDataSlice.reducer;
