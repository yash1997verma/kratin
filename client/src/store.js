import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './redux/userSlice';
import { bookingReducer } from './redux/bookingSlice';
const store =  configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
  },
});

export default store;