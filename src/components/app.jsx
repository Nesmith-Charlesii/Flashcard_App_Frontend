import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar/navBar';
import CollectionForm from './CollectionForm/collectionForm';
import FlashcardDisplay from './FlashcardDisplay/flashcardDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            collection_id: 1,
            flashcards: [],
            renderType: "home"
        }
    }

    componentDidMount() {
        this.getAllCollections()
        this.getCollectionFlashcards(1)
    }

    getAllCollections = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/flashcard_app/api/collections/`)
            console.log(data)
            this.setState({collections:data})
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    getCollectionFlashcards = async(collection_id) => {
        console.log('getting flashcards')
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/flashcard_app/api/collection/${collection_id}/flashcards/`)
            this.setState({flashcards: data})
            console.log(this.state.flashcards)
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    render() {
        if(this.state.renderType === "home"){
            return(
                <div className="container-fluid">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} />
                    </div>
                    <div className="flashcard-display-wrapper">
                        <FlashcardDisplay flashcards={this.state.flashcards} />
                    </div>
                    {/* <div className="form-wrapper">
                        <CollectionForm />
                    </div> */}
                </div>
            )
        } else if(this.state.renderType === "collection form") {
            return(
                <div className="container-fluid">
                    <div className="nav-wrapper">
                        <NavBar/>
                    </div>
                    <div className="form-wrapper">
                        <CollectionForm />
                    </div>
                </div>
            )
        }
    }
}

export default App;