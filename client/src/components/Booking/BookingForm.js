import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addBookingAsync } from "../../redux/bookingSlice";

export default function BookingForm({setBookingForm}){
    const dispatch =  useDispatch();
    const typeRef = useRef();
    const dateRef = useRef();

    const handleAdd = (e)=>{
        e.preventDefault();
        const bookingData = {
            type: typeRef.current.value,
            date: dateRef.current.value,
        }
        // console.log(bookingData)
        dispatch(addBookingAsync(bookingData));
        //close booking form
        setBookingForm(false);
    }

    const handleReset = (e)=>{
        e.preventDefault();
        typeRef.current.value = "doctor";
        dateRef.current.value = "";
    }


    //close the form
    const handleClose = ()=>{
        setBookingForm(false);
    }




    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-sm">
        <div className="bg-[#e9f1fc]  shadow-md rounded-md w-[70%] max-w-md relative">
                <svg
                    onClick={handleClose}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="#ffffff"
                    className="w-6 h-6 absolute top-[2px]  right-[2px] cursor-pointer"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

            <div className=" bg-[#718ffc] h-[30px] w-full rounded-t-md">
                    
            </div>


            <form className="flex flex-col p-2   ">
            
              
                <label className="mt-3">Type of booking</label>
                <select className="p-3" ref={typeRef} name="cars">
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                   
                </select>
                
                <label className="mt-3">Date</label>
                <input ref={dateRef} className="p-2"  type="date" />
                

               

                
                
                <div className="flex justify-center my-3 ">
                    <button onClick={handleAdd} className="p-2 m-2 font-bold bg-[#718ffc] rounded-md">
                        ADD
                    </button>
                    <button onClick={handleReset} className="p-2 m-2 font-bold bg-[#718ffc] rounded-md">RESET</button>
                </div>
            

            </form>

        </div>
   
       
      </div>
    )
}   