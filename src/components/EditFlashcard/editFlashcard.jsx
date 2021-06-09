import React, {useState, useEffect} from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './editFlashcard.css'; 

const EditFlashcard = (props) => {
    const [select, setSelect] = useState({})

    const Submittal = () => {
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer,
            collection: select.collection
        }
        props.updateFlashcard(flashcard)
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);

    const handleSelect = (e) => {
        console.log("SELECT!")
        //Target name attribute of select option. assign value to key 'name attribute'
        //Make reference to value using select.collection (state.name)
        setSelect(select => ({...select, [e.target.name]: e.target.value}))
    }

    //useEffect will execute after any changes in component
    //check that the value from the select option is correct after onClick event
    useEffect(() => {
        console.log('select value', select.collection)
    })
    
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
                        <select onChange={handleSelect} name="collection">
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