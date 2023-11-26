import axios from "axios";
import { useEffect } from "react"

export default function Protected(){
    //validate token
    useEffect(()=>{
        const token = localStorage.getItem('token');
        const res = axios.get('http://localhost:8000/user/protected',{
            headers:{
                Authorization: token,
            }
        });
        console.log(res.data);
    },[])
    return (
        <>  
           <p>protected page</p>
        </>
    )
}