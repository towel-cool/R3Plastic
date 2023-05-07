import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterBox() {
    const [usrEmail, setEmail] = useState("");
    const [usrPassword, setPassword] = useState("");
    const [usrFirstName, setFirstName] = useState("");
    const [usrLastName, setLastName] = useState("");
    const [usrProvince, setProvinceName] = useState("");
    const [usrCity, setCityName] = useState("");
    const [usrAddressLine1, setAddressLine1] = useState("");
    const [success, setSuccess] = useState("");
    const [failure, setFailure] = useState("");

    let validProvinces = ["Ontario", "Quebec"]

    const handleSubmit = (e) => {
        e.preventDefault();;

        if (!validProvinces.includes(usrProvince))
        {
            setFailure("Your province is not currently eligible for our service");
            return
        }

        axios.post('http://localhost:3001/users/add', {
            email: usrEmail,
            password: usrPassword,
            firstname: usrFirstName,
            lastname: usrLastName,
            address: {
                province: usrProvince,
                city: usrCity,
                addressline1: usrAddressLine1, 
            },
        })
        .then(function (response) {
            setSuccess(response);
        })
        .catch(function (error) {
            setFailure(error.response.data);
        });
    }

    if (!success && !failure)
        return(
        <div>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <label>EMAIL</label>
                <input className="text-black" value={usrEmail} type="text" required onChange={(e) => setEmail(e.target.value)} />
                <label>PASSWORD</label>
                <input className="text-black" value={usrPassword} type="text" required onChange={(e) => setPassword(e.target.value)} />
                <label>FIRST NAME</label>
                <input className="text-black" value={usrFirstName} type="text" required onChange={(e) => setFirstName(e.target.value)} />
                <label>LAST NAME</label>
                <input className="text-black" value={usrLastName} type="text" required onChange={(e) => setLastName(e.target.value)} />
                <label>ADDRESS</label>
                <div>
                    <label>PROVINCE</label>
                        <select className="bg-white text-black" value={usrProvince} required onChange={(e) => setProvinceName(e.target.value)}>
                            <option value="">Select a province</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Yukon">Yukon</option>
                        </select>
                    <label>CITY</label>
                        <input className="text-black" value={usrCity} type="text" required onChange={(e) => setCityName(e.target.value)} />
                    <label>ADDRESS LINE 1</label>
                        <input className="text-black" value={usrAddressLine1} type="text" required onChange={(e) => setAddressLine1(e.target.value)} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    else if (success)
        return(
            <div>
                <h1>You are now registered!</h1>
            </div>
        );
    else if (failure)
        return(
            <div>
                <h1>It seems there was a problem when registering...</h1>
                <h1>{failure}</h1>
            </div>
        );
}