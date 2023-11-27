//react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//signIn signUp page
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import MedReminder from "./components/MedReminder/MedReminder";
import Bookings from "./components/Booking/Bookings";
import { useEffect, useState } from "react";
//hot toast
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./redux/userSlice";
import { getUserDataAsync } from "./redux/userSlice";
function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state=> state.user.isAuthenticated);
  

  //every time app loads if there is a token present on client side
  useEffect(()=>{
    //check if token exist in storage
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      //set the token in store
      // dispatch(userActions.setToken(storedToken));
      //set isAuthenticated
      dispatch(userActions.setIsAuthenticated(true));
      //set current userData in store
      dispatch(getUserDataAsync());
    }
    else{//token is not present
      dispatch(userActions.setIsAuthenticated(false));
    }
  },[]);






  const router = createBrowserRouter([
    {
      path: '/',
      element:<LandingPage />
    },
    {
      path: '/signIn',
      element: <SignIn  />
    },
    {
      path:'/signUp',
      element: <SignUp />
    },
    //home is a protected route
    {
      path:'/home',
      element : <Home />,
      children:[
        { 
          index: true,
          element:< MedReminder />
        },
        {
          path:"/home/booking",
          element: < Bookings />

        },
       
      ]
    },
   
  ])
  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    
    </>
   
  );
}

export default App;
