import React, { useEffect, useState } from "react";

const Button = ({disable}:{disable:boolean}) =>{
    const [value, setValue] = useState(0);
    
    useEffect(() => {
        console.log("Mi value" ,value)
    },[value]);


    const handleClick = () => {
        setValue(prev=>prev+1);
    }
    return <button disabled = {disable} onClick={handleClick}>boton componente {value}</button>;

};

export default Button;