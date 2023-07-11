import Input from "../../../Components/Inputs/Input";
import AuthTemplate from "../../../templates/AuthTemplate/AuthTemplate";
import Button from '../../../Components/Buttons/Button';
import { useState } from "react";

const Login = () =>{
    let isAdmin = true;
    const [email, setEmail] = useState("");

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    };

    const checkEmail = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return !emailRegex.test(email);
    };

    return(

            <div>
            <Input name = 'email' 
            isAdmin placeholder = 'Email'
            onChange={handleChangeEmail}
            value = {email}/>
            <Input name = 'password' isAdmin placeholder = 'Password'/>
            <Button disable={checkEmail()}/>
            </div>
    );
};

Login.displayName = 'Login'

export default Login;