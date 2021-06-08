import React from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './flashcardForm.css';

const FlashcardForm = (props) => {

    const Submittal = () => {
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer
        }
        props.postFlashcard(flashcard)
        console.log('post flashcard', flashcard)
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);

    return (
        <div className="flashcardForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Card Question</label>
                    <textarea className="form-control my-4" type="text" name="question" onChange={handleChange} value={inputs.question}/>
                    <label htmlFor="answer">Card Answer</label>
                    <textarea className="form-control my-4" type="text" name="answer" onChange={handleChange} value={inputs.answer}/>
                    <div className="select-collection">
                        <label htmlFor="answer">Assign to Collection</label>
                        <br/>
                        <select className="btn btn-sm btn-secondary" name="collection">
                            {props.collections.map(collection => {
                                return(
                                    <option key={collection.id}>{collection.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    {/* <input className="form-control my-4" type="text" name="answer" onChange={handleChange} value={inputs.answer}/> */}
                    <button className="btn btn-primary my-4" id="flashcard-button">Create Flashcard</button>
                </div>
            </form>
        </div>
    )
}

export default FlashcardForm;