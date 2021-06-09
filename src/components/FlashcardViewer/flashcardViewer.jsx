import React from 'react';
import Flashcard from '../FlashCard/flashCard';

function FlashcardViewer(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={() => props.previousBook()}>Previous Book</button>
            </div>
            <div className="col-md-4">
                {/*Book component is created within BookViewer component. This makes book component a child of BookViewer*/}
                <Flashcard flashcard={props.flashcard}/>
            </div>
            <div className="col-md-4">
                {/* use anonymous function so that function isn't repeatedly called when render function is called*/}
                <button onClick={() => props.nextBook()}>Next Book</button>
            </div>
        </div>
    )
}

export default FlashcardViewer;