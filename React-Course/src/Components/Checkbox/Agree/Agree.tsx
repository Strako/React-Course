import React from 'react';
import './Agree.css'

interface Props {
    agreeStatus: boolean;
    setAgree: React.Dispatch<React.SetStateAction<boolean>>
}

const ForgotPassword = ({agreeStatus, setAgree} :Props) =>{
    const handleAgree = ()=>{
        setAgree(!agreeStatus);
    };

    return(
        <div className="agree-container">
            <input type = "checkbox" className="input-checkbox" checked = {agreeStatus} onClick={handleAgree}></input>
            <span className =  "agree-text"> He leido y acepto los terminos y condiciones</span>
        </div>
    );
};

export default ForgotPassword