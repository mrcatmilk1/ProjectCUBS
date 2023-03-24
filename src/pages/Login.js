import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/Firebase";

const Login = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('password');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Signed in as user:', user);
                localStorage.setItem("user", JSON.stringify(user))
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
            <Link to={"/register"}> Register Instead </Link>
        </div>
    )
}

export default Login;