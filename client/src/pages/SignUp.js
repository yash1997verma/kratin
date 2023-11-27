import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { signUpAsync } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUp(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //get status to check if user was created
    const signUpStatus = useSelector((state)=>state.user.status);
    const submitForm =async (e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const password = passwordRef.current.value;
        
      
        const userData = {username, email, phone, password};

        dispatch(signUpAsync(userData));
        
    
        
   
    }
  
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token){
            navigate('/home');
        }
    },[]);
    

    //use Ref to get references from form
    const usernameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();


    useEffect(() => {
        // Disable scroll when the component mounts
        document.body.style.overflow = "hidden";
    
        // Re-enable scroll when the component unmounts
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return (
        <>  
           <div className="flex items-center select-none justify-center mt-10">
                <img className="w-[80px] h-[60px]" src="/icons/kratinlogo.png" alt="not foun" />
                <p className=" font-mySans ml-2 text-[#]  font-extrabold text-[40px]">Kratin</p> 
            </div>
            <div className=" flex  items-center justify-center h-screen w-screen ">
                <div className=" flex justify-between border-1 border-slate-300 rounded-xl gap-8 md:gap-20  shadow-lg p-6 mt-[-100px] md:w-[900px]">
                  
                <img className="h-fit w-[300px] hidden sm:inline my-auto " src="/Illustrations/signUp.png" alt=" " />
                    <form onSubmit={submitForm} className="flex flex-col h-[500px] w-[300px] sm:h-auto sm:w-auto gap-2 text-2xl p-auto md:pr-10">
                        <div className="mx-auto mb-6 ">
                            <p className="text-xl font-bold  font-mySans  ">Sign Up</p> 
                        </div>
                        <label className="font-mySans" >Name</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" ref={usernameRef}  placeholder="John Doe" type="text"  />
                        <label className="font-mySans" >Email</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" ref={emailRef} placeholder="johndoe@gmail.com" type="email"  />
                        <label className="font-mySans" >Phone No.</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" ref={phoneRef} placeholder="Phone Number" type="tel"  />
                        <label className="font-mySans" >Password</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 font-mySans font-thin" ref={passwordRef} placeholder="Create a strong password" type="password" />
                        
                        <button type="submit" className="border-2 rounded-md h-[40px] p-2 font-mySans flex items-center justify-center bg-[#6c8aff] hover:bg-[#7f99fd] text-white">Sign Up</button>

                        <div className="flex justify-between items-center mt-4">
                            <p className="font-mySans text-lg">Already have an account ? </p>
                            <Link className="mt-[-4px]"  to="/signIn"><span className="font-mySans text-lg text-blue-600 " href="/">Sign In</span></Link>
                        </div>
                    </form>      
                </div>         
            </div>
        </>
    )
}