import React from 'react';
import './SearchBar.css';
import '../App.css';
import { TextInput } from './TextInput';
import Dropdown from 'react-dropdown';
import { Button } from './Button';


function SearchBar(props){
    let currentLang = props.language;
    const LANGUAGES = {
        "en": ["Sale", "Rent", "Enter City Name", "Search"],
        "al": ["Shitje", "Qira", "Vendosni emrin e qytetit", "Kërko"]
    }

    return (
        <>
            <div className="SearchBar">
                <div className="searchbar-container">
                    {LANGUAGES[props.language][3]}
                    <div className="search-query-container">
                        <TextInput type="text" placeholder={LANGUAGES[props.language][2]} id="location"/>
                        <select className="dropdown" id="propertyType" defaultValue="sale">
                            <option value="sale">{LANGUAGES[props.language][0]}</option>
                            <option value="rent">{LANGUAGES[props.language][1]}</option>
                        </select>
                        <Button buttonSize="btn--md" buttonStyle="btn--form" onClick={props.callfunction}>{LANGUAGES[props.language][3]}</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;