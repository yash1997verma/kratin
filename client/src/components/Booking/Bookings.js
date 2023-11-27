import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BookingForm from "./BookingForm";
import Booking from "./Booking";
import { getBookingsAsync } from "../../redux/bookingSlice";
export default function Bookings(){
   
    //get all bookings from store
    const bookings = useSelector(state=> state.booking.bookings);
    //booking form state
    const [bookingForm, setBookingForm] = useState(false);
    const dispatch = useDispatch();

    //get userdata from store
    const userData = useSelector(state=>state.user.userData);

    useEffect(()=>{
        //get all bookings
        dispatch(getBookingsAsync());
        toast('Booking View', {
            icon: <img className="w-4 h-4" src="/icons/booking.png" alt='N/A' />,
        });
    },[userData]);
    const navigate = useNavigate();
    const appView = useSelector(state=>state.user.appView);
    useEffect(()=>{
        if(appView === 'medReminder'){
            navigate('/home');
        }
    },[appView]);//run every time appview changes


    //open and close booking form
    const handleAddBookingForm =()=>{
        setBookingForm(!bookingForm);
    }
  
    return (
        <> 
            {bookingForm && <BookingForm  setBookingForm={setBookingForm} /> }
            <div className="flex flex-col mx-auto max-w-[600px] mt-[70px] ">
                {userData &&
                    <p className="text-center font-mySans font-bold mb-3">
                        <img  className="w-6 h-6 inline mx-2" src="/icons/wave.png" alt='N/A' /> 
                        Hi {userData.username.split(' ')[0]}! Now you can book a Doctor's appointment or a nurse from the comfort of your home.
                    </p>
                }
                <div className="flex justify-between">
                    <p className="font-mySans font-bold">List of all Bookings</p>
                    <button onClick={handleAddBookingForm} className=" flex text-sm p-3  rounded-3xl shadow-lg shadow-slate-200 font-semibold h-fit w-fit ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#3db1e3"
                            className="w-4 h-4 mr-1 mt-[2px]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        <p>ADD BOOKING</p> 
                    </button>
                </div>

                {/* bookings section */}
                {bookings.map((bookingData)=>(
                    <Booking key={bookingData._id} bookingData = {bookingData} />
                ))}
                
            </div>
           
        </>
    )
}