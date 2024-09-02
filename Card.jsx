import React from 'react';
import './Card.css';

function Card({ title, content }) {
    return (
        <div className='Card'>
            <h1>Name: {title}</h1>
            <p>Password: {content}</p>
        </div>
    );
}

export default Card;
