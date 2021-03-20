import React from 'react';
import { Button } from './Button';
import './ResultCard.css';

const LANGUAGES = {
    "en": ["Area", "Cost", "Facilities", 'Number Of Bedrooms'],
    "al": ["Zona", "Kostoja", "Lehtesirat", "Numri i dhomave të gjumit"],
}

export const ResultCard = ({
    language,
    cost,
    area,
    bedrooms,
    facilities
})=>{
    return (
        <div className="result-card">
            <ul>
                <li>{LANGUAGES[language][1]}: {cost} INR</li>
                <li>{LANGUAGES[language][0]}: {area} sq.ft</li>
                <li>{LANGUAGES[language][3]}: {bedrooms}</li>
                <li>{LANGUAGES[language][2]}: {facilities}</li>
            </ul>
            <div className="card-controls">
                <Button buttonStyle="btn--form">View</Button>
            </div>
        </div>
    );
};