import React, { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInAsync } from "../redux/userSlice";
import { getUserDataAsync } from "../redux/userSlice";
export default function SignIn({ onLogin }){
  
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token){
            navigate('/home');
        }
    },[]);
    
    

    const signInStatus = useSelector(state=> state.user.status);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const userData = { email, password};
       
        //sign in user
        dispatch(signInAsync(userData));
   
        

    }

    useEffect(() => {
        if (signInStatus === 'succeeded') {
            
            navigate('/home');
        }
    }, [signInStatus, navigate]);

      

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
            <div className=" flex flex-col  items-center justify-center h-screen w-screen ">
           
                <div className=" flex justify-between border-1 border-slate-300 rounded-xl gap-8 md:gap-20  shadow-lg p-6 mt-[-100px] md:w-[900px]">
                  
                    <img className="h-fit w-[300px] hidden sm:inline my-auto " src="/Illustrations/signIn.png" alt="" />
                    <form onSubmit={handleSubmit} className="flex flex-col h-[500px] w-[300px] sm:h-auto sm:w-auto gap-2 text-2xl p-auto md:pr-10">
                        <div className="mx-auto mb-6 ">
                            <p className ="text-xl  font-bold  ">Sign In</p> 
                        </div>
                        <label className="font-mySans" >Email</label>
                        <input required ref={emailRef} className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" placeholder="johndoe@gmail.com" type="email" />
                        <label className="font-mySans" >Password</label>
                    
                        <input required ref={passwordRef} className="border-2 rounded-md h-[60px] p-4  font-thin" placeholder="Enter your password" type="password" />
                        <button type="submit" className="border-2 rounded-md h-[40px] p-2   flex items-center justify-center bg-[#6c8aff] hover:bg-[#7f99fd] text-white">Sign In</button>

                        <div className="flex items-center justify-between mt-4">
                            <p className=" text-lg">Do not have an account ? </p>
                            <Link className="mt-[-4px]" to="/signUp"><span className=" text-lg text-blue-600 " href="/">Sign Up</span></Link>
                            
                        </div>
                    </form>      
                </div>         
            </div>
        </>
    )
}