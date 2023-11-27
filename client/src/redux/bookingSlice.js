import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const apiUrl = 'https://timeapi.onrender.com';
// const apiUrl = 'http://localhost:8000';

const token = localStorage.getItem('token');
export const addBookingAsync = createAsyncThunk(
    'booking/addBookingAsync',
    async(bookingData)=>{
        try{
            
            const res = await axios.post(
                `${apiUrl}/booking/addBooking`,
                bookingData,
                {
                  headers: {
                    Authorization: token,
                  }
                }
            );
            return res.data;
        }catch(err){
            throw err;
        }
    }
);

export const getBookingsAsync = createAsyncThunk(
    'booking/getBookingsAsync',
    async()=>{
        const res = await axios.get(`${apiUrl}/booking/getbookings`,
            {
                headers: {
                Authorization: token,
                },
            }
        );
        return res.data.allBookings;
    }
)

const bookingSlice = createSlice({
    name: 'booking',
    initialState:{
        bookings: [],
        status: 'idle',

    },
    reducers:{
        setBookings :(state, action)=>{
            state.bookings = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addBookingAsync.fulfilled, (state, action)=>{
            //add booking in the state
            state.bookings.push(action.payload);
            toast.success("Booking Created");
            state.status = 'success';

        })
        .addCase(addBookingAsync.rejected, (action, state)=>{
            toast.success('Error in booking!!');
            state.status = 'failed';
        })
        //get all bookings
        .addCase(getBookingsAsync.fulfilled, (state, action)=>{
            state.status = 'success';
            state.bookings = action.payload;
        })
        .addCase(getBookingsAsync.pending, (state, action)=>{
            state.status = 'loading';
        })
        .addCase(getBookingsAsync.rejected, (state, action)=>{
            state.status = 'failed';
            toast.error('Error in loading bookings');
        })
    }
});

//export actions
export const bookingActions = bookingSlice.actions;
//export reducers
export const bookingReducer = bookingSlice.reducer