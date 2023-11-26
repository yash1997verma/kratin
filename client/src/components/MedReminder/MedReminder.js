import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function MedReminder(){
    const navigate = useNavigate();
    const appView = useSelector(state=>state.user.appView);
    useEffect(()=>{
        if(appView === 'booking'){
            navigate('/home/booking');
        }
    },[appView]);//run every time appview changes
    return (
        <>  
           <p>Med page</p>
        </>
    )
}