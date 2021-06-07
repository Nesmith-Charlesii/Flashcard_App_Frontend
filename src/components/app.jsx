import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar/navBar';
import CollectionForm from './CollectionForm/collectionForm';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            renderType: "home"
        }
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

    render() {
        if(this.state.renderType === "home"){
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