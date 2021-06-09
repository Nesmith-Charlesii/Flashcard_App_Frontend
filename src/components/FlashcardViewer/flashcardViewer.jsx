import React from 'react';
import Flashcard from '../FlashCard/flashCard';
import './flashcardViewer.css';

function FlashcardViewer(props) {
    return(
        <div className="flashcard-viewer">
            <div className="previous-flashcard">
                <button onClick={() => props.previousBook()}>Previous Book</button>
            </div>
            <div className="active-Flashcard">
                <Flashcard flashcard={props.flashcard}/>
            </div>
            <div className="next-flashcard">
                {/* use anonymous function so that function isn't repeatedly called when render function is called*/}
                <button onClick={() => props.nextBook()}>Next Book</button>
            </div>
        </div>
    )
}

export default FlashcardViewer;