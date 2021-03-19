import React from 'react'
import { Redirect } from 'react-router';
import { Button } from './Button';
import './form.css';
import { TextInput } from './TextInput';

function Login(props) {
  const LANGUAGES = {
    "en": ["Login", "Username", "Password"],
    "al": ["Hyrja", "Emri i përdoruesit", "Fjalëkalimi"]
  }

  const login = () => {
    let uUsername =  document.getElementById("loginUsername").value;
    let uPassword =  document.getElementById("loginPassword").value;
    if(localStorage.getItem(uUsername) == null){
      alert("User does not exist");
    }else{
      let userDetails = JSON.parse(localStorage.getItem(uUsername));
      console.log(userDetails);
      if((userDetails.username === uUsername) && (userDetails.password === uPassword)){
        localStorage.setItem("demoAppCurrentUser", uUsername);
        alert("Login Successful");
        window.location.assign("/"+window.location.href.split("/")[3]+"/search");
      }else{
        alert("Username or Password invalid");
      }
    }
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
  }

  return (
    <>
      <div className="form-login">
        <div className="form-container">
          <div className="form-header">
          {LANGUAGES[props.language][0]}
          </div>
          {LANGUAGES[props.language][1]}
          <TextInput type="text" id="loginUsername" />
          {LANGUAGES[props.language][2]}
          <TextInput type="password" id="loginPassword" />
          <Button buttonSize="btn--md" buttonStyle="btn--form" onClick={login}>{LANGUAGES[props.language][0]}</Button>
        </div>
      </div>
    </>
  );
}

export default Login;
