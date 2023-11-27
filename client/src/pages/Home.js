import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
//home is a protected route
export default function Home(){
    const navigate = useNavigate();

    //validate the token present in local storage
    const token = localStorage.getItem('token')
 

    //validate token
    useEffect(()=>{
        const checkTokenValidity = async()=>{
            try{
                const res = await axios.get('http://localhost:8000/user/protected',{
                    headers:{
                        Authorization: token,
                    }
                });
                
        


            }catch(err){
                //token is invalid
                //redirect to signin page
                navigate('/signIn');
            }


        }
        
        //only check validity if token is present 
        if(token){
            checkTokenValidity();
        }else{//if no token is present, redirect to signIn
            navigate('/signIn');
        }
        
    },[token])
    return (
        <>  
            <div className="h-screen w-screen   font-mySans ">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}