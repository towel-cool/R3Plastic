import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function CohereBot() {
    const [input, setInput] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    function handleClick() {
        axios.post('https://r3backend.onrender.com/botCall', {
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
        <div className="flex flex-col justify-center align-middle text-center h-screen">
            <h1 className="text-3xl">Cohere Bot</h1>
            <input id = "botInput" type = "text" className='text-black w-72 self-center bg-gray-200 border-2 border-black h-10' placeholder="Enter Question" maxLength={250} onChange={handleInputChange}></input>
            <button className='bg-gray-200 rounded-md border-2 border-black cursor-pointer 
                duration-150 hover:bg-gray-400 w-40 self-center text-black my-2' id = "botButton" onClick={handleClick}>Enter</button>
            <p>Bot Response: </p>
            {responseMsg && <p>"{responseMsg}"</p>}
        </div>
    );
}
