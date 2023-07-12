import Input from "../../../Components/Inputs/Input";
import Button from '../../../Components/Buttons/Button';
import Agree from '../../../Components/Checkbox/Agree/Agree'
import { useState } from "react";
import './Login.css'

const Login = () => {
    const [agreeStatus, setAgree] = useState<boolean>(false);

    const [email, setEmail] = useState("");

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const checkEmail = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return !emailRegex.test(email);
    };

    const checkAgree = (email: boolean) => {
        let result: boolean;
        if (email === false && agreeStatus === true) {
            result = false;
            console.log("A", result);

            return result;
        } else {
            result = true;
            console.log("B", result);
            return result;
        }
    };


    console.log("Agree status", agreeStatus);
    console.log("Mail status", checkEmail());
    return (
        <div className="container">
            <div className="login-title">
                <h1>Login</h1>
                <h2>¡Bienvenido!</h2>
            </div>
            <div className="login-input">
                <Input
                    type='email'
                    name='Correo electrónico de DaCodes'
                    placeholder='Email'
                    onChange={handleChangeEmail}
                    value={email} />

                <Input
                    type='password'
                    name='Contraseña'
                    placeholder='Password' />

                <Agree agreeStatus={agreeStatus} setAgree={setAgree} />
                <Button disable={checkAgree(checkEmail())} />
            </div>
        </div>
    );
};

Login.displayName = 'Login'

export default Login;