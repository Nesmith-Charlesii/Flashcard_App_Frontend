import React, {useState, useEffect} from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './flashcardForm.css';

const FlashcardForm = (props) => {

    const [select, setSelect] = useState({})

    const Submittal = () => {
        //create flashcard object to pass as body for post request in 'postFlashcard' function
        const flashcard = {
            question: inputs.question,
            answer: inputs.answer,
            collection: select.collection
        }
        //call 'postFlashcard' function in App component
        props.postFlashcard(flashcard)
        
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
        <div className="flashcardForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h4>Card Question</h4>
                    <textarea className="form-control my-4" type="text" name="question" onChange={handleChange} value={inputs.question}/>
                    <h4>Card Answer</h4>
                    <textarea className="form-control my-4" type="text" name="answer" onChange={handleChange} value={inputs.answer}/>
                    <br/>
                    <div className="select-collection">
                        <h4>Assign to Collection</h4>
                        <br/>
                        {/* {onChange in 'select' tag monitors changes to options. use name or id for reference} */}
                        <select onChange={(e) => handleSelect(e)} name="collection">
                            {props.collections.map(collection => {
                                return(
                                    <option key={collection.id} value={collection.id}>{collection.title}</option>
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