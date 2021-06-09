import React from 'react';
import './flashcard.css';

const Flashcard = (props) => {
    return (
        <div className = "flashcard-carousel">
            <div className = "card-side front">
                <p>Front</p>
            </div>
            <div className= "card-side back">
                <p>Back</p>
            </div>
        </div>
    )
}

export default Flashcard;