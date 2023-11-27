import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";  
import toast from "react-hot-toast";
import { userActions } from "../../redux/userSlice";
export function Navbar(){
  const dispatch = useDispatch();
  //get app view from store
  const appView  = useSelector(state=> state.user.appView); 
  const changeAppView = (view)=>{
    dispatch(userActions.setAppView(view));
  }
  //logout user
  const logOut =()=>{
    localStorage.removeItem('token');
    //remove data from store
    dispatch(userActions.logOut());
  }
 
  return(
    <>
      <nav className=" sticky top-0  w-full h-[64px]  text-black flex justify-between px-2 md:px-8 rounded-2xl  shadow-lg">
        
        <Link className="flex items-center mx-auto " to ="/home">
          <div className="flex items-center cursor-pointer">
            <img className="w-6 h-5" src="/icons/kratinlogo.png" alt="not foun" />
            <p className="font-kratinLogo italic font-bold  ml-2  text-[20px]">kratin</p> 
          </div>

        </Link>
        
      </nav>

      


    
      {/*Side Nav */}
      <div className="fixed gap-8 flex flex-col items-center shadow-lg from-[#f9feff] to-[#e9f1fc] p-4 h-full w-[90px]">
        




        {/* medReminder view */}
        <div onClick={() => changeAppView('medReminder')}  className= {` flex flex-col items-center justify-center h-[80px] w-[60px] rounded-xl  shadow-md cursor-pointer  hover:bg-blue-100 ${appView === 'medReminder' ? 'bg-blue-200': 'bg-white'} `}>
          <img className="w-8 h-8" src="/icons/medicine.png" alt='N/A' />
          <p className="select-none p-2 text-[10px] font-mySans font-bold">MEDICINE</p>
        </div>

        {/* Booking view */}
        <div onClick={() => changeAppView('booking')}  className={` flex flex-col items-center justify-center h-[80px] w-[60px] rounded-xl  shadow-md cursor-pointer  hover:bg-blue-100 ${appView === 'booking' ? 'bg-blue-200': 'bg-white'} `}>
          <img className="w-8 h-8" src="/icons/booking.png" alt='N/A' />
          <p className="select-none p-2 text-[10px] font-mySans font-bold">BOOKINGS</p>
        </div>

       

        {/* logout */}
        <div onClick={logOut} className="absolute flex flex-col items-center bottom-[100px] cursor-pointer " title="Logout">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <p className="select-none text-center p-2 text-[10px] font-mySans font-bold">LOGOUT</p>

        </div>
      </div>

    </>
  )
}