import React from 'react';
import './flashcard.css';

const Flashcard = (props) => {
    return (
        <div className = "flashcard-carousel">
            <div className = "card-side front">
                <p>{props.flashcard.question}</p>
            </div>
            <div className= "card-side back">
                <p>{props.flashcard.answer}</p>
            </div>
        </div>
    )
}

export default Flashcard;