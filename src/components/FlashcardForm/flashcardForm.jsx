import React from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './flashcardForm.css';

const FlashcardForm = (props) => {

    const Submittal = () => {
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer,
            collection: inputs.collectionId
        }
        console.log(flashcard.collection)
        props.postFlashcard(flashcard)
        
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);

    return (
        <div className="flashcardForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h4>Card Question</h4>
                    <textarea className="form-control my-4" type="text" name="question" onChange={handleChange} onInput={props.cardFront} value={inputs.question}/>
                    <h4>Card Answer</h4>
                    <textarea className="form-control my-4" type="text" name="answer" onChange={handleChange} onInput={props.cardBack} value={inputs.answer}/>
                    <br/>
                    <div className="select-collection">
                        <h4>Assign to Collection</h4>
                        <br/>
                        <select onChange={handleChange} name="collection">
                            {props.collections.map(collection => {
                                return(
                                    <option key={collection.id}  value={inputs.collectionId=collection.id}>{collection.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <br/>
                    <button className="btn btn-primary my-4" id="flashcard-button">Create Flashcard</button>
                </div>
            </form>
        </div>
    )
}

export default FlashcardForm;