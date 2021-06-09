import React from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './editFlashcard.css'; 

const EditFlashcard = (props) => {

    const Submittal = () => {
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer,
            collection: inputs.collectionId
        }
        console.log(flashcard.collection)
        props.updateFlashcard(flashcard)
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);
    
    return (
        <div className="editFlashcardForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h4>Update Question</h4>
                    <textarea className="form-control my-4" type="text" name="question" onChange={handleChange} value={inputs.question}/>
                    <h4>Update Answer</h4>
                    <textarea className="form-control my-4" type="text" name="answer" onChange={handleChange} value={inputs.answer}/>
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
                    <button className="btn btn-primary my-4" id="flashcard-button">Update Flashcard</button>
                </div>
            </form>
        </div>
    )
}

export default EditFlashcard;