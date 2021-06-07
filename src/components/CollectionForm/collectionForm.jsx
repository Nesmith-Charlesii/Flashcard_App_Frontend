import React from 'react';
import useCollectionForm from '../CustomHooks/useCollectionForm';
import './collectionForm.css';

const CollectionForm = (props) => {

    const Submittal = () => {
        props.postCollection(inputs.title)
        console.log(inputs.title)
    }

    const {inputs, handleChange, handleSubmit} = useCollectionForm(Submittal);

    return (
        <div className="collectionForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">name your collection</label>
                    <input className="form-control my-4" type="text" name="title" onChange={handleChange} value={inputs.title}/>
                    <button className="btn btn-primary" id="collection-button">Create Collection</button>
                </div>
            </form>
        </div>
    )
}

export default CollectionForm;