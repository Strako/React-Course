import Footer from '../../Images/Footer.png'
import FooterLogos from '../../Images/FooterLogos.png'
import DacodesLogo from '../../Images/DacodesLogo .png'
import UserIcon from '../../Images/usericon.png'
import './DefaultTemplate.css'

interface AuthTemplateI {
    children: React.ReactNode
}

const DefaultTemplate = ({ children }: AuthTemplateI) => {


    return (
        <div className="auth-template">

            <div className="navbar-container">
                <img className="navbar-logo" src={DacodesLogo} alt="Dacodes Logo" />
                <img className="navbar-user-icon" src={UserIcon} alt="Dacodes Logo" />
            </div>

            <div className="container">
                <div className="body">{children}</div>
            </div>

            <div className="footer-container">
                <img className="footer-image" src={Footer} alt="Footer Image" />
                <img className="footer-logos" src={FooterLogos} alt="Footer Logos" />
            </div>
        </div>
    );
};

DefaultTemplate.displayName = 'DefaultTemplate'
export default DefaultTemplate;