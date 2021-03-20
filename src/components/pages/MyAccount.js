import React from 'react';
import { Button } from '../Button';
import { Navbar } from '../Navbar';
import { TextInput } from '../TextInput';
import './MyAccount.css';

function MyAccount(props){
    const LANGUAGES = {
    "en": ["Name", "Username", "Change Password", "Update"],
    "al": ["Emrin", "Emri i përdoruesit", "Ndryshimi Fjalëkalimi", "Azhurnoni"]
    }
    let currentUser = localStorage.getItem("demoAppCurrentUser");
    let userDetails = JSON.parse(localStorage.getItem(currentUser));

    const update = () => {
        userDetails.password = document.getElementById("updatePassword").value;
        localStorage.setItem(currentUser, JSON.stringify(userDetails));
        document.getElementById("updatePassword").value = "";
        alert("Password changed successfully");
    }
    return(
        <>
            <div className="MyAccount">
                <Navbar language={props.language}/>
                <div className="account-details-container">
                    <ul>
                        <li>{LANGUAGES[props.language][0]}: {userDetails.name}</li>
                        <li>{LANGUAGES[props.language][1]}: {userDetails.username}</li>
                    </ul>
                </div>
                <div className="update-details-container">
                    {LANGUAGES[props.language][2]}:
                    <TextInput className="update-fields" type="password" id="updatePassword"/>
                    <Button buttonStyle="btn--form" onClick={update}>{LANGUAGES[props.language][3]}</Button>
                </div>
            </div>
        </>
    );
}

export default MyAccount;