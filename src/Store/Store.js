import { configureStore } from '@reduxjs/toolkit';
import TicketReducer from '../Features/TicketSlice';
import SettingReducer from '../Features/SettingSlice';

const store = configureStore({
  reducer: {
    // tickets: TicketReducer,
    set: SettingReducer,
  },
});

export default store;
