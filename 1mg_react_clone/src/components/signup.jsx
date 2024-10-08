import React from 'react';
import '../styles/signupStyle.css';
import LoginPageImg1 from "../assets/LoginPageImg1.png";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const Signup = ({ setIsSignedUp }) => { 

    let navigate = useNavigate();

    function handleSignupSubmit(e) {
        e.preventDefault();

        let obj = {
            Username: e.target.Username.value,
            Email: e.target.Email.value,
            Password: e.target.Password.value,
        };


        axios.post("https://react-tata1mg-clone-default-rtdb.asia-southeast1.firebasedatabase.app/User.json", obj)
            .then((response) => {
                alert("User Signed Up Successfully");
                setIsSignedUp(true);
                navigate("/Login");
            })
            .catch((error) => {
                console.error("Error adding user:", error);
            });
    }

    return (
        <div id='SignupPage'>
            <div id='ImageDiv'>
                <img src={LoginPageImg1} alt="Signup Illustration" />
            </div>
            <div id='SignupForm'>
                <div id='SignupBoldText'>Signup</div>
                <div id='SignupsmallText'>Get access to your orders, lab tests & doctor consultations</div>
                <form onSubmit={handleSignupSubmit}>
                    <input type="text" id="signupUsername" name='Username' placeholder='Enter Username ' required />
                    <input type="email" id="signupEmail" name='Email' placeholder='Enter Email ID' required />
                    <input type="password" id='signupPassword' name='Password' placeholder='Enter Password' required />
                    <input type="submit" value="Signup" id='SignupSubmit' />
                </form>
                <div id='SignupsmallText'>Existing User ? <Link to="/login"><u>Login Here</u></Link></div>
            </div>
        </div>
    );
};
