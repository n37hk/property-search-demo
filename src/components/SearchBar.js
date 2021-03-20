import React from 'react';
import './SearchBar.css';
import '../App.css';
import { TextInput } from './TextInput';
import { Button } from './Button';


function SearchBar(props){
    const LANGUAGES = {
        "en": ["Sale", "Rent", "Enter City Name", "Search"],
        "al": ["Shitje", "Qira", "Vendosni emrin e qytetit", "Kërko"]
    }

    return (
        <>
            <div className="SearchBar">
                <div className="searchbar-container">
                    <div className="search-query-container">
                        <span className="search-logo">{LANGUAGES[props.language][3]}</span>
                        <TextInput type="text" placeholder={LANGUAGES[props.language][2]} id="location"/>
                    </div>
                    <select className="dropdown dropdown-light" id="propertyType" defaultValue="sale">
                        <option value="sale">{LANGUAGES[props.language][0]}</option>
                        <option value="rent">{LANGUAGES[props.language][1]}</option>
                    </select>
                    <Button buttonSize="btn--md" buttonStyle="btn--form" onClick={props.callfunction}>{LANGUAGES[props.language][3]}</Button>
                    <span className="result-summary" id="resultSummary"></span>
                </div>
            </div>
        </>
    );
}

export default SearchBar;