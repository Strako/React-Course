import React, { useEffect, useState } from "react";
import './Button.css'
const Button = ({ disable }: { disable: boolean }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("Mi value", value)
    }, [value]);


    const handleClick = () => {
        setValue(prev => prev + 1);
    }
    return (
        <div className="button-container">
            <button className="button-icon" disabled={disable} onClick={handleClick}>Crear cuenta{value}</button>;
        </div>
    );
};

export default Button;