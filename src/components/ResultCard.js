import React from 'react';
import { Button } from './Button';
import './ResultCard.css';

function ResultCard(props){
    const LANGUAGES = {
        "en": ["Area", "Cost", "Amenities", 'Number Of Bedrooms'],
        "al": ["Zona", "Kostoja", "Lehtësitë", "Numri i dhomave të gjumit"],
    }
    return (
        <div className="result-card">
            <ul>
                <li>{LANGUAGES[props.language][1]}: {props.cost}</li>
                <li>{LANGUAGES[props.language][0]}: {props.area}</li>
                <li>{LANGUAGES[props.language][3]}: {props.bedrooms}</li>
                <li>{LANGUAGES[props.language][2]}: {props.location}</li>
            </ul>
            <div className="card-controls">
                <Button buttonStyle="btn--form">View</Button>
            </div>
        </div>
    );
}

export default ResultCard;