import React, { Children } from "react";

interface AuthTemplateI{
    children: React.ReactNode
}

const AuthTemplate = ({children}: AuthTemplateI) =>{
    return(
    <div>
        Esto es un AuthTemplate
        {children}
    </div>
    );
};

AuthTemplate.displayName= 'AuthTemplate'
export default AuthTemplate;