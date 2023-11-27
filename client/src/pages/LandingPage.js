import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function LandingPage(){
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        if(token){
            navigate('/home');
        }
    },[]);
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center select-none justify-center mt-10">
                <img className="w-[80px] h-[60px]" src="/icons/kratinlogo.png" alt="not foun" />
                <p className=" font-mySans ml-2 text-[#]  font-extrabold text-[40px]">Kratin</p> 
        </div>
        <p className="font-bold font-mySans mx-[100px] mt-[40px]">
            🚀 Welcome to Kratin, your personal health companion!<br /> Let's soar towards a healthier, happier you with Kratin! 🚀💙
        </p>

        <div className="flex justify-between w-[800px]  mx-4 mt-[50px]">
            <div className="flex flex-col ml-[200px] mt-[100px] gap-8  ">
                
                <Link to="/signIn"  className=" flex items-center justify-center text-sm p-3   rounded-3xl shadow-lg shadow-slate-200 font-semibold h-fit w-[200px] ">
                        <p >SIGN IN</p> 
                </Link>
                <Link to="/signUp"  className=" flex items-center justify-center text-sm p-3   rounded-3xl shadow-lg shadow-slate-200 font-semibold h-fit w-[200px] ">
                        <p >SIGN UP</p> 
                </Link>
            </div>
            <img className="w-[300px] h-[300px]" src="/illustrations/landingPage.jpg" alt="" />
        </div>


      </div>
    )
}