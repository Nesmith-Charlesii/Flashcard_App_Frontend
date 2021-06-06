import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar/navBar';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: []
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
        return(
            <div className="container-fluid">
                <div className="nav-wrapper">
                    <NavBar />
                </div>
            </div>
        )
    }
}

export default App;