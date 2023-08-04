import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () =>{
    if(sessionStorage.getItem("guest_session_id") !== null){
        return <Navigate to="/movies"/>
    }else{
    return <Outlet />    
    } 
}

export default PublicRoute;