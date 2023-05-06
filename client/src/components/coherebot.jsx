import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function CohereBot() {
    const [input, setInput] = useState("");

    function handleClick() {
        const inputValue = input;
        console.log(inputValue)

        axios.post('http://localhost:3001/botCall', {
            inputPrompt: inputValue
          })
          .then(function (response) {
            console.log(response);
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
            <input id = "botInput" type = "text" placeholder="Enter Command" maxLength={250} onChange={handleInputChange}></input>
            <button id = "botButton" onClick={handleClick}>Enter</button>
        </div>
    );
}