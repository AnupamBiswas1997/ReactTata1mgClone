import React, { useState , useEffect } from 'react';
import '../styles/loginStyle.css';
import LoginPageImg1 from "../assets/LoginPageImg1.png";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from '../redux/action';

export const Login = () => {

    let dispatch = useDispatch();

    let UserData = useSelector((state) => state.UID_Email);

    let navigate = useNavigate();

    function handleLoginSubmit(e) {
        e.preventDefault();

        localStorage.clear();


        let obj = {
            UsernameEmail: e.target.UsernameEmail.value,
            Password: e.target.Password.value
        };


        let AuthData = UserData.filter((ele) => {
            if ((ele.Udetail.Username == obj.UsernameEmail || ele.Udetail.Email == obj.UsernameEmail) && (ele.Udetail.Password == obj.Password)) {
                return ele;
            }
        });


        if (AuthData.length) {
            localStorage.setItem("UID1mg", AuthData[0].UID);
            localStorage.setItem("Username1mg", AuthData[0].Udetail.Username);
            dispatch(AuthUser());
            navigate("/");
        }
        else{
            alert("Invalid Username or Password");
        }
    }

    return (
        <div id='LoginPage'>
            <div id='ImageDiv'>
                <img src={LoginPageImg1} />
            </div>
            <div id='LoginForm'>
                <div id='LoginBoldText'>Login</div>
                <div id='LoginsmallText'>Get access to your orders, lab tests & doctor consultations</div>
                <form onSubmit={handleLoginSubmit}>
                    <input type="text" id="loginUsernameEmail" name='UsernameEmail' placeholder='Enter Email ID or Username' />
                    <input type="password" id='loginPassword' name='Password' placeholder='Enter Password' />
                    <input type="submit" value="Login" id='LoginSubmit' />
                </form>
                <div id='LoginsmallText'>New User ? <Link to="/signup"><u>Signup Here</u></Link></div>
            </div>
        </div>

    );
};

