import {  } from "";
import { useState } from "react";
import axios from "axios";

function App() {
    const [quote, setQuote] = useState('')
    const getQuote = () => {
        axios.get('https://willtech-website-1.onrender.com')
        .then(res => {
            console.log(res.data.content)
            setQuote(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="App">
            <button onClick={getQuote}>Get Quote</button>
            { quote && <p>{quote}</p> }
        </div>
    );
}

export default App;