import React from 'react'
import { Button } from './Button';
import './form.css';
import { TextInput } from './TextInput';

function Signup(props) {
  const LANGUAGES = {
    "en": ["Sign Up", "Name", "Username", "Password", "Confirm Password"],
    "al": ["Regjistrohuni", "Emrin", "Emri i përdoruesit", "Fjalëkalimi", "Konfirmo fjalëkalimin"]
  } 

  const registerUser = () => {
    let uName = document.getElementById("regName").value;
    let uUsername =  document.getElementById("regUsername").value;
    let uPassword =  document.getElementById("regPassword").value;
    let uConfirmPassword =  document.getElementById("regConfirmPassword").value;
    if(uUsername === ""){
      alert("Username is required");
    }else if(uPassword !== uConfirmPassword){
      alert("Password and Confirm Password does not match");
    }else{
      let userDetails = JSON.stringify({
        name: uName,
        username: uUsername,
        password: uPassword
      });
      if(localStorage.getItem(uUsername) == null){
        localStorage.setItem(uUsername, userDetails);
        alert("Registration Successful");
        document.getElementById("regName").value = "";
        document.getElementById("regUsername").value = "";
        document.getElementById("regPassword").value = "";
        document.getElementById("regConfirmPassword").value = "";
      }else{
        alert("Username already exists");
      }
    }
  }

  return (
    <>
      <div className="form-login">
        <div className="form-container">
          <div className="form-header">
          {LANGUAGES[props.language][0]}
          </div>
          {LANGUAGES[props.language][1]}
          <TextInput type="text" id="regName"/>
          {LANGUAGES[props.language][2]}
          <TextInput type="text" id="regUsername"/>
          {LANGUAGES[props.language][3]}
          <TextInput type="password" id="regPassword"/>
          {LANGUAGES[props.language][4]}
          <TextInput type="password" id="regConfirmPassword"/>
          <Button buttonSize="btn--md" buttonStyle="btn--form" onClick={registerUser}>{LANGUAGES[props.language][0]}</Button>
        </div>
      </div>
    </>
  );
}

export default Signup;
