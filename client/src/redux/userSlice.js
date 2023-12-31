import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//hot toast
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const apiUrl = 'https://timeapi.onrender.com';

// const apiUrl = 'http://localhost:8000';

//handle signUp
export const signUpAsync  = createAsyncThunk(
    'user/signUpAsync',
    async(userData)=>{
        try{
            const res = await axios.post(`${apiUrl}/user/signUp`, userData);
            return res.data
        }catch(err){
            throw err;
        }
    }
);

export const signInAsync = createAsyncThunk(
    'user/signInAsync',
    async(userData)=>{
        try{
            const res = await axios.post(`${apiUrl}/user/signIn`, userData);
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

export const getUserDataAsync = createAsyncThunk(
    'user/getUserDataAsync',
    async()=>{
        try{
            const token = localStorage.getItem('token');
            const res = await axios.get(`${apiUrl}/user/getUserData`,{
                headers:{
                    Authorization: token,
                }
            });
            return res.data
        }catch(err){
            throw err;
        }


    }

);






const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,//can be used to access user data anywhere in app
        isAuthenticated: false,//check anywhere if user is authenticated
        status: 'idle',
        error: null,
        appView: 'medReminder',//controls what is views in app
        
        
    },
    reducers: {
        setAppView:(state, action)=>{
            const view = action.payload;
            state.appView = view;
        },
        setIsAuthenticated : (state, action)=>{
            state.isAuthenticated = action.payload;
        },
        logOut:(state, action)=> {
            state.isAuthenticated = false;
            state.userData= null;
            state.status = 'idle'
        },
    },
    extraReducers: (builder)=>{
        builder
        //for signUp 
        .addCase(signUpAsync.fulfilled, (state, action)=>{
            toast.success("User Created");
            // state.status = 'succeeded';
        })
        .addCase(signUpAsync.rejected, (state, action)=>{
            state.status = 'failed';
            toast.error('Error in creating user');
        })
        //for signIn
        .addCase(signInAsync.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            toast.success("Signed in successfully!");
            
            //save token in local storage and state
            localStorage.setItem('token', action.payload.token);
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
        })
        .addCase(signInAsync.rejected, (state, action)=>{
            state.status = 'failed';
            state.isAuthenticated = 'false';
            toast.error('Error in signing in');
        })
        .addCase(getUserDataAsync.fulfilled, (state, action)=>{
            state.userData = action.payload;
        })
    }
});

//export actions
export const userActions = userSlice.actions;
//export reducers
export const userReducer = userSlice.reducer;

