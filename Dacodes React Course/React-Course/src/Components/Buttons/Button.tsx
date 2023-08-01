import React, { useEffect, useState } from "react";
import './Button.css'
import { useNavigate } from "react-router-dom";

interface buttonProps {
    disable: boolean,
}

const Button = ({ disable }: buttonProps) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        if (sessionStorage.getItem('key') !== "") {
            console.log(sessionStorage.getItem('key'))
            navigate('/example');
            window.scrollTo(0, 0);
        }
    }
    return (
        <div className="button-container">
            <button className="button-icon" disabled={disable} onClick={handleLogin}>Crear cuenta</button>
        </div>
    );
};

export default Button;