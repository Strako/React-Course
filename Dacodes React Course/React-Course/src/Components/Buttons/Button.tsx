import React, { useEffect, useState } from "react";
import './Button.css'
import { useNavigate } from "react-router-dom";
import { guestSession } from "../../api/guestSession";

interface buttonProps {
    disable: boolean,
}


const Button = ({ disable }: buttonProps) => {
    const navigate = useNavigate();
    const handleLogin = async () => {


        guestSession().then((r) => {
            console.log(sessionStorage.getItem('api_token'))
            console.log(r.data)
            sessionStorage.setItem('guest_session_id', r.data.guest_session_id)
        }).catch((e) => {
            console.log(e);
        }).then(() => {
            if (sessionStorage.getItem('guest_session_id') !== null && sessionStorage.getItem('guest_session_id') !== "") {
                console.log(sessionStorage.getItem('guest_session_id'))
                navigate('/example');
                window.scrollTo(0, 0);
            } else {
                navigate('*');
            }
        })


    }
    return (
        <div className="button-container">
            <button className="button-icon" disabled={disable} onClick={handleLogin}>Crear cuenta</button>
        </div>
    );
};

export default Button;