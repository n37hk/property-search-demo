import React from 'react';
import './Home.css';
import Login from '../login';
import '../../App.css';
import { HomeNavbar } from '../Navbar';
import Signup from '../signup';
// import { Signup_al, Signup_en } from '../signup';

function HomeLogin(props){
    return (
        <>
        <div className="Home">
            <HomeNavbar language={props.language}/>
            <Login language={props.language}/>
        </div>
        </>
    );
}

function HomeSignup(props){
    return (
        <>
        <div className="Home">
            <HomeNavbar language={props.language}/>
            <Signup language={props.language}/>
        </div>
        </>
    );
}

export {HomeLogin, HomeSignup};