import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () =>{
    if(sessionStorage.getItem("guest_session_id") === null){
        return <Navigate to="/"/>
    }
    return <Outlet/>
 }

export default ProtectedRoute;