import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeContent() {
    const [apiTest, setApiTest] = useState("empty");

    useEffect(() => {
        axios.get('http://localhost:3001/getTest').then((response) => {
            setApiTest(response.data);
        });
    },[])

    return(
        <>
            <h1>Hello this is test</h1>
            <h1>{apiTest}</h1>
        </>
    );
}
