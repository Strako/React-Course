import React, { useEffect, useState } from "react";
import './Button.css'
import { useNavigate } from "react-router-dom";
import { guestSession } from "../../api/guestSession";

interface buttonProps {
    disable: boolean    
}


const Button = ({ disable }: buttonProps) => {
    const navigate = useNavigate();
    const handleLogin = async () => {


        guestSession().then((r) => {
 //           console.log(r.data)
            sessionStorage.setItem('guest_session_id', r.data.guest_session_id)
        }).catch((e) => {
            console.log(e);
        })
          setTimeout(() => {
            if(sessionStorage.getItem('guest_session_id') !== null){
            navigate('/movies');
            }
          }, 2000);                        
        window.scrollTo(0, 0);

    }
    return (
        <div className="button-container">
            <button className="button-icon" disabled={disable} onClick={handleLogin}>Crear cuenta</button>
        </div>
    );
};

export default Button;