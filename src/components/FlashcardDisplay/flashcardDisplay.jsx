import React from 'react';

const FlashcardDisplay = (props) => {
    return (
        <div className="card-display">
            {props.flashcards.map(flashcard => {
                return (
                    <div className="flashcard">
                        <div className="flash-question">
                            <p>{flashcard.question}</p>
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