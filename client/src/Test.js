import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Test() {
    const [res, setRes] = useState('empty');

    useEffect(() => {
        axios.get('http://localhost:3001/getTest').then((response) => {
            setRes(response.data);
        });
    }, [])

    return (
        <>
            <h1>{res}</h1>
        </>
    );
}
