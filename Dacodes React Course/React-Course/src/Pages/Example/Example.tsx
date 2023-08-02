import { Navigate, useNavigate } from "react-router-dom";

const Example = () => {
    setTimeout(500);
    if(sessionStorage.getItem('guest_session_id') !== null && sessionStorage.getItem('guest_session_id') !== ""){
    return (
        <div>Example</div>
    );
    }else{
        return(
            <Navigate to="/"/>
        )
    }
}

export default Example;