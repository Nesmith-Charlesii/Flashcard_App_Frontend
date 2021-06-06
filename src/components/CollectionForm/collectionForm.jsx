import React from 'react';

const CollectionForm = () => {
    return (
        <div className="collectionForm">
            <form>
                <label htmlFor="title">Title of Collection</label>
                <input type="text" name="title"/>
                <button className="btn btn-sm btn-primary">Create Collection</button>
            </form>
        </div>
    )
}

export default CollectionForm;