import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function CohereBot() {
    const [input, setInput] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    function handleClick() {
        axios.post('http://localhost:3001/botCall', {
            inputPrompt: input
          })
          .then(function (response) {
            console.log(response.data[0].text);
            setResponseMsg(response.data[0].text);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function handleInputChange(event) {
        setInput(event.target.value)
    }

    return(
        <div>
            <h1>Cohere Bot Test</h1>
            <label>Bot Input: </label>
            <input id = "botInput" type = "text" className='text-black' placeholder="Enter Command" maxLength={250} onChange={handleInputChange}></input>
            <button id = "botButton" onClick={handleClick}>Enter</button>
            {responseMsg && <p>{responseMsg}</p>}
        </div>
    );
}