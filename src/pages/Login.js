import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Set as env variables
const firebaseConfig = {
    apiKey: "AIzaSyD8nWDpJdYEFGw23qYyrHNhb6pb9OGmJc4",
    authDomain: "fir-crud-d35a8.firebaseapp.com",
    databaseURL: "https://fir-crud-d35a8-default-rtdb.firebaseio.com",
    projectId: "fir-crud-d35a8",
    storageBucket: "fir-crud-d35a8.appspot.com",
    messagingSenderId: "1006099546197",
    appId: "1:1006099546197:web:36ab90946315043c3714dc"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export function Login({ setIsLoggedIn }) {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('password');

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in:', user);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
            });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}