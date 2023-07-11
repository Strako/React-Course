import React, { Children } from "react";
import './AuthTemplate.css'

interface AuthTemplateI{
    children: React.ReactNode
}

const AuthTemplate = ({children}: AuthTemplateI) =>{
    return(
    <div className = "auth-template">
        <div className = "navbar">
            <h1>Navbar</h1>
        </div>
        <div className ="body">{children}</div>
        <div className = "footer-container">
            <h1>Footer</h1>
        </div>
    </div>
    );
};

AuthTemplate.displayName= 'AuthTemplate'
export default AuthTemplate;