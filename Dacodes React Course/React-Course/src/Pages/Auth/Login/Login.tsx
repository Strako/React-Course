import Input from "../../../Components/Inputs/Input";
import AuthTemplate from "../../../templates/AuthTemplate/AuthTemplate";

const Login = () =>{
    let isAdmin = true;

    return(
            <div>
            <Input name = 'email' isAdmin placeholder = 'Email'/>
            <Input name = 'password' isAdmin placeholder = 'Email'/>
            </div>

    );
};

Login.displayName = 'Login'

export default Login;