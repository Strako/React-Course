import { Fragment, useState} from "react"; 

interface InputI{
    name?: string
    placeholder?: string
    isAdmin?: boolean
}

const Input = ({ name, placeholder, isAdmin}: InputI) =>{
    
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    };

    console.log(value)
    console.log(isAdmin)
    if(isAdmin = true) return null
    return(
        <div>
            <label>{value}</label>
            <input placeholder={placeholder} name={name} value={value} onChange = {handleChange}/>
        </div>
    );


};

Input.displayName = 'Input'


export default Input