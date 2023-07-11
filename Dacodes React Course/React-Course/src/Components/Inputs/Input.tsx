import { Fragment, useState} from "react"; 

interface InputI{
    name?: string;
    placeholder?: string;
    isAdmin?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    value?: string;
}

const Input = ({ name, placeholder, isAdmin, value, onChange}: InputI) =>{
    if(isAdmin = false) return null
    return(
        <div>
            <input placeholder={placeholder} 
            name={name} 
            value={value} 
            onChange = {onChange}/>
        </div>
    );


};

Input.displayName = 'Input'


export default Input