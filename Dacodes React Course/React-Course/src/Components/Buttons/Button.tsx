import React, { useEffect, useState } from "react";
import './Button.css'
import { useNavigate } from "react-router-dom";

interface buttonProps {
    disable: boolean,
}

const Button = ({ disable }: buttonProps) => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleLogin = () => {
        if (sessionStorage.getItem('key') !== null) {
            navigate('/example');
        }
    }
    return (
        <div className="button-container">
            <button className="button-icon" disabled={disable} onClick={handleLogin}>Crear cuenta{value}</button>
        </div>
    );
};

export default Button;