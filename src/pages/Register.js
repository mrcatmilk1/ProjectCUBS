import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/Firebase";

const Register = () => {

    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('password');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    updateProfile(result.user, {
                        displayName: name,
                    })
                }
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
            });
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
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
                <button type="submit">Register</button>
            </form>
            <Link to={"/login"}> Login Instead </Link>
        </div>
    )
}

export default Register;