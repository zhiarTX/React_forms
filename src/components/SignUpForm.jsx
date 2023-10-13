import {useState } from "react";

export default function SignUpForm () {
const [username, setUsername] = useState ("");
const [password, setPassword] = useState ("");
const [error, setError] = useState (null);

async function handleSubmit(event) {
    event.preventDefault();

    try {
    const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup");
    const result = await response.json();
    console.log (result);
    } catch (error) {
        setError(error.message);
    }
}

return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>error</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username:{""}
            <input 
            type="text"
            value={username}
            onChange={(e) => {
                console.log(e.target.value)
                setUsername(e.target.value)
            }}/>
        </label>
        <label>
            Password:{""}
            <input
            type="password"
            value={password}
            onChange={(e) => {
                console.log(e.target.value)
                setPassword(e.target.value)
            }}/>
            
            </label>
           <button>Submit</button> 
    </form>
    </>
);
}

