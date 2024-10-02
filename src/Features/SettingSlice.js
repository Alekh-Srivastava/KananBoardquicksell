import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const SettingSlice = createSlice({
  name: 'set',
  initialState: {
    grouping: 'status',
    ordering: 'priority',
    data:{}
  },
  reducers: {
    setdata:(state,action)=>{
      console.log("slice ",action.payload);
      
      state.data=action.payload;
    },
    setGrouping: (state, action) => {
      state.grouping = action.payload;
    },
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },
});

export const { setGrouping, setOrdering,setdata } = SettingSlice.actions;
export default SettingSlice.reducer;
