import React from 'react';
import './navBar.css';
import './fontawesome/css/all.min.css';

const NavBar = (props) => {
    return (
        <nav className="nav-container">
            <div className="page-direct">
                <div className="return">
                    <i className="fas fa-arrow-circle-left fa-2x" onClick={props.return}></i>
                </div>
                <div className="home">
                    <button onClick={props.home}><i className="fas fa-home fa-2x"></i></button>
                </div>
            </div>
            <div className="model-creations">
                <div className="new-collection">
                    <p><button onClick={() => props.createCollection()} ><i className="fas fa-plus-circle"></i></button> new collection</p>
                </div>
                <div className="create-flashcard">
                    <p><button onClick={() => props.createFlashcard()}><i className="fas fa-plus-circle"></i></button> create flashcard</p>
                </div>
            </div>
            <div className="collections-header">
                <h3>collections</h3>
            </div>
            <div className="collections my-4">
                <ul>
                    {props.collections.map(collection => {
                        // Add conditional for id == 1 to show active collection on load
                        return(
                            <li key={collection.id}><button id="collectionButton" onClick={() => props.getFlashcards(collection.id)}>{collection.title}</button></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;