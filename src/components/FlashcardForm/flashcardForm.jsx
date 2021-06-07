import React from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';

const FlashcardForm = (props) => {

    const Submittal = () => {
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer
        }
        props.postFlashcard(flashcard)
        console.log(flashcard)
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);

    return (
        <div className="flashcardForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Card Question</label>
                    <input className="form-control my-4" type="text" name="question" onChange={handleChange} value={inputs.question}/>
                    <label htmlFor="answer">Card Answer</label>
                    <input className="form-control my-4" type="text" name="answer" onChange={handleChange} value={inputs.answer}/>
                    <button className="btn btn-primary" id="flashcard-button">Create Collection</button>
                </div>
            </form>
        </div>
    )
}

export default FlashcardForm;