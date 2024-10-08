import "../styles/navbarstyle.css";
import { useNavigate , Link } from "react-router-dom";  
import { CartHome } from "./carthome";
import logo1mg from "../assets/logo1mg.PNG";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from '../redux/action';

export function Navbar() {
    const navigate = useNavigate();  
    let dispatch = useDispatch();


    let isAuth = useSelector((state) => state.isAuth);
    let UID = localStorage.getItem("UID1mg");
    let Username = localStorage.getItem("Username1mg");


    const handleLoginClick = () => {
        navigate("/login");  
    };

    const handleSignupClick = () => {
        navigate("/signup");  
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        dispatch(AuthUser());
        navigate("/");
    }

    return (
        <div id="Navbar">
            <div id="Nav1stSeg">
                <div><Link to="/"><img src={logo1mg} alt="1mg Logo" /></Link></div>
                <NavSpecialText>MEDICINES</NavSpecialText>
                <NavNormalText>LAB TESTS <NavButtonHighlight>SAFE</NavButtonHighlight></NavNormalText>
                <NavNormalText>CONSULT DOCTORS</NavNormalText>
                <NavNormalText>CANCER CARE</NavNormalText>
                <NavNormalText>PARTNERSHIPS<NavButtonHighlight>NEW</NavButtonHighlight></NavNormalText>
                <NavNormalText>CARE PLAN  <NavButtonHighlight>SAVE MORE</NavButtonHighlight></NavNormalText>
            </div>
            {isAuth == false ? (<div id="Nav2ndSeg">
                <LoginSignUpText onClick={handleLoginClick}>Login</LoginSignUpText>
                <LoginSignUpText onClick={handleSignupClick}>Sign Up</LoginSignUpText>
            </div>) :
                (<div id="Nav2ndSeg">
                <div className="NavUserDiv">
                    <span className ="material-symbols-outlined">account_circle</span> {Username}
                </div>
                <LoginSignUpText onClick={handleLogoutClick}>Logout</LoginSignUpText>
                </div>)
            }
            <div className="NormalOfferTextStyle">
                Offers
            </div>
            <Link to="/Cart"><CartHome /></Link>
            <div className="NormalOfferTextStyle">
                Need Help?
            </div>
        </div>
    );
}

export function NavNormalText({ children }) {
    return (
        <div id="navtext1">
            {children}
        </div>
    );
}

export function NavButtonHighlight({ children }) {
    return (
        <div id="navtext2">
            <button>{children}</button>
        </div>
    );
}

export function NavSpecialText({ children }) {
    return (
        <div id="navtext3">
            {children}
        </div>
    );
}

export function LoginSignUpText({ children, onClick }) {
    return (
        <div id="loginSignuptext" onClick={onClick}>  
            <button>{children}</button>
        </div>
    );
}
