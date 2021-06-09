import React from 'react';
import './flashcardDisplay.css';
import './fontawesome/css/all.min.css';

const FlashcardDisplay = (props) => {
    return (
        <div className="card-display my-3">
            <div className="begin-flashcard">
                <div className="play-buttoon">
                    <button id="playButton" onClick={() => props.flashcardCarousel()}><i id="playButton" class="fas fa-play-circle fa-10x"></i></button>
                </div>
            </div>
            {props.flashcards.map(flashcard => {
                return (
                    <div className="flashcard" key={flashcard.id}>
                        <div className="flash-question">
                            <p>{flashcard.question}</p>
                        </div>
                        <div className="editButton">
                            <button onClick={() =>props.editFlashcard(flashcard.id)}>Edit</button>
                        </div>
                        <div className="flash-answer">
                            <p>{flashcard.answer}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FlashcardDisplay;