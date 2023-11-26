import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../redux/userSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
//home is a protected route
export default function Home(){
    const navigate = useNavigate();

    //validate the token present in local storage
    const token = localStorage.getItem('token')
    const isAuthenticated = useSelector(state=> state.user.isAuthenticated);
    const userData = useSelector(state=> state.user.userData);
    const dispatch = useDispatch();

    //validate token
    useEffect(()=>{
        const checkTokenValidity = async()=>{
            console.log(isAuthenticated)
            try{
                const res = await axios.get('http://localhost:8000/user/protected',{
                    headers:{
                        Authorization: token,
                    }
                });
                
                //token is valid
                // dispatch(userActions.setIsAuthenticated(true));


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