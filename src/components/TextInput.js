import React from 'react';
import './TextInput.css';

export const TextInput = ({
    onClick,
    type,
    id,
    className,
    placeholder
}) => {
    return (
        <input type={type} id={id} onClick={onClick} className={className} placeholder={placeholder}/>
    );
}