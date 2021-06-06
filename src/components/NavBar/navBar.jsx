import React from 'react';

const NavBar = (props) => {
    return (
        <nav>
            <div className="page-direct d-flex flex-row">
                <div className="return">
                    <p>Return</p>
                </div>
                <div className="home">
                    <p>Home Icon</p>
                </div>
            </div>
            <div className="model-creations">
                <div className="new-collection">
                    <p>new collection</p>
                </div>
                <div className="create-flashcard">
                    <p>create flashcard</p>
                </div>
            </div>
            <div className="collections">
                <h3>Collections</h3>
            </div>
        </nav>
    )
}

export default NavBar;