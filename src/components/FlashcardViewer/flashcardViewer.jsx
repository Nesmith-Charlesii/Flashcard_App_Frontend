import React from 'react';
import Flashcard from '../FlashCard/flashCard';
import './flashcardViewer.css';
import './fontawesome/css/all.min.css';

function FlashcardViewer(props) {
    return(
        <div className="flashcard-viewer">
            <div className="previous-flashcard">
                <button id="previousButton" onClick={() => props.previousFlashcard()}><i className="fas fa-angle-double-left fa-7x"></i></button>
            </div>
            <div className="active-Flashcard">
                <Flashcard flashcard={props.flashcard}/>
            </div>
            <div className="next-flashcard">
                {/* use anonymous function so that function isn't repeatedly called when render function is called*/}
                <button id="nextButton" onClick={() => props.nextFlashcard()}><i className="fas fa-angle-double-right fa-7x"></i></button>
            </div>
        </div>
    )
}

export default FlashcardViewer;