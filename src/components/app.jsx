import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar/navBar';
import CollectionForm from './CollectionForm/collectionForm';
import FlashcardForm from './FlashcardForm/flashcardForm';
import FlashcardDisplay from './FlashcardDisplay/flashcardDisplay';
import EditFlashcard from './EditFlashcard/editFlashcard';
// import Flashcard from './FlashCard/flashCard';
import FlashcardViewer from './FlashcardViewer/flashcardViewer';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            collection_id: 1,
            flashcards: [],
            flashcard_id: 0,
            flashcard_count: Number,
            flashcard_number: 0,
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
            if(data) {
                this.setState({collections:data})
            } else {
                console.log("no collections to retrieve")
            }
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    getCollectionFlashcards = async(collection_id) => {
        console.log('getting flashcards')
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/flashcard_app/api/collection/${collection_id}/flashcards/`)
            if(data) {
                this.setState({
                    flashcards: data,
                    renderType: "home",
                })
            } else {
                console.log("no flashcard to retrieve")
            }
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    postCollection = async(title) => {
        console.log(title)
        try {
            let {data} = await axios.post('http://127.0.0.1:8000/flashcard_app/api/collections/', title)
            console.log('title', data)
            this.setState({collections: [...this.state.collections, data]})
            console.log(this.state.collections);
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    postFlashcard = async(flashcard) => {
        console.log('post flashcard execute', flashcard)
        try {
            let {data} = await axios.post('http://127.0.0.1:8000/flashcard_app/api/collection/1/flashcards/', flashcard)
            console.log('flashcard posting', data)
            this.setState({flashcards: [...this.state.flashcards, data]})
            console.log(this.state.flashcards);
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    updateFlashcard = async(flashcard) => {
        console.log('update flashcard execute', flashcard)
        console.log('flashcard id', this.state.flashcard_id)
        try {
            let {data} = await axios.put(`http://127.0.0.1:8000/flashcard_app/api/flashcard/${this.state.flashcard_id}/`, flashcard)
            console.log(data)
        }
        catch(error) {
            alert(`Whoops! ${error}. Looks like we're having some technical difficulties.Try again later!`)
        }
    }

    editFlashcard = (id) => {
        //this.setState is an async function. add an anon function after dict of state variables to see state change immediately 
        this.setState({
            renderType: "edit flashcard form",
            flashcard_id: id
        }, () => {console.log(this.state.flashcard_id)})
    }

    studyFlashcards = () => {
        this.setState({
            renderType: "flashcard carousel"
        })
    }

    goToNextFlashcard() {
        let tempFlashcardNumber = this.state.flashcard_number;
        tempFlashcardNumber++;
        console.log(this.state)
        if(tempFlashcardNumber === this.state.flashcards.length) {
            tempFlashcardNumber = 0;
        }
        this.setState({
            flashcard_number: tempFlashcardNumber
        });
    }

    goToPreviousFlashcard() {
        let tempFlashcardNumber = this.state.flashcard_number;
        tempFlashcardNumber--;
        if(tempFlashcardNumber < 0) {
            tempFlashcardNumber = this.state.flashcards.length - 1;
        }
        this.setState({
            flashcard_number: tempFlashcardNumber
        });
    }

    renderAction = (renderType) => {
        if(renderType === "collection form") {
            this.setState({renderType: "collection form"})
        } else if(renderType === "flashcard form") {
            this.setState({renderType: "flashcard form"})
        } else if(renderType === "edit flashcard form") {
            this.setState({renderType: "edit flashcard"})
        } else if(this.state.renderType === "flashcard carousel") {
            this.setState({renderType: "flashcard carousel"})
        } 
        else {
            this.setState({renderType: "home"})
        }
    }

    render() {
        //COLLECTION FORM RENDER TYPE
        if(this.state.renderType === "collection form") {
            return(
                <div className="container-fluid" id="collectionForm">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} createCollection={() => this.renderAction("collection form")} createFlashcard={() => this.renderAction("flashcard form")} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} home={() => this.renderAction("home")}/>
                    </div>
                    <div className="collection-form-wrapper">
                        <CollectionForm postCollection={(title) => this.postCollection(title)} />
                    </div>
                </div>
            )
        } 
        //FLASHCARD FORM RENDER TYPE
        else if(this.state.renderType === "flashcard form") {
            return(
                <div className="container-fluid" id="flashcardForm">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} createCollection={() => this.renderAction("collection form")} createFlashcard={() => this.renderAction("flashcard form")} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} home={() => this.renderAction("home")}/>
                    </div>
                    <div className="flashcard-form-wrapper">
                        <FlashcardForm postFlashcard={(flashcard) => this.postFlashcard(flashcard)} collections={this.state.collections}/>
                    </div>
                </div>
            )
        } 
        //EDIT FLASHCARD RENDER TYPE
        else if(this.state.renderType === "edit flashcard form"){
            return(
                <div className="container-fluid" id = "editFlashcard">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} createCollection={() => this.renderAction("collection form")}  createFlashcard={() => this.renderAction("flashcard form")} flashcards={this.state.flashcards} home={() => this.renderAction("home")}/>
                    </div>
                    <div className="edit-flashcard-wrapper">
                        <EditFlashcard collections={this.state.collections} updateFlashcard={flashcard => this.updateFlashcard(flashcard)} />
                    </div>
                </div>
            )
        } 
        //FLASHCARD CAROUSEL RENDER TYPE
        else if(this.state.renderType === "flashcard carousel") {
            return(
                <div className="container-fluid" id="flashcardCarousel">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} createCollection={() => this.renderAction("collection form")}  createFlashcard={() => this.renderAction("flashcard form")} flashcards={this.state.flashcards} home={() => this.renderAction("home")}/>
                    </div>
                    <div className="flashcard-carousel-wrapper">
                        <FlashcardViewer flashcard={this.state.flashcards[this.state.flashcard_number]} nextFlashcard={() => this.goToNextFlashcard()} previousFlashcard = {() => this.goToPreviousFlashcard()}/>
                    </div>
                </div>
            )
        }
        // HOMEPAGE RENDER TYPE
        else {
            return(
                <div className="container-fluid">
                    <div className="nav-wrapper">
                        <NavBar collections={this.state.collections} getFlashcards={(collection_id) => this.getCollectionFlashcards(collection_id)} createCollection={() => this.renderAction("collection form")}  createFlashcard={() => this.renderAction("flashcard form")} flashcards={this.state.flashcards} home={() => this.renderAction("home")}/>
                    </div>
                    <div className="flashcard-display-wrapper">
                        <FlashcardDisplay flashcards={this.state.flashcards} editFlashcard={(flashcardId) => this.editFlashcard(flashcardId)} flashcardCarousel = {() => this.studyFlashcards()} />
                    </div>
                </div>
            )
        }
    }
}

export default App;