import React, {useState} from 'react';
import axios from 'axios';

const App = () => {

    const [collections, setCollections] = useState([])

    const getAllCollections = async(e) => {
        let {data} = await axios.get(`http://127.0.0.1:8000/flashcard_app/api/collections/`)
        console.log(data)
        setCollections({collections: data})
    }

    return(
        <div className="container-fluid row">
            <button onClick={(e) => getAllCollections(e)}>Collections</button>
        </div>
    )
}

export default App;