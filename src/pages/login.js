import React, { useState } from 'react';
import firebase from '../firebase';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(sukses => {
                console.log('Login berhasil');
                console.log(sukses.user.email);
                console.log(sukses.user.displayName);
            })
            .catch(gagal => {
                console.log(gagal.code);
                console.log(gagal.message);
            })
    }

    return(
        <div>
            <h1 title="login">Login Untuk Memulai Chat</h1>
            <form onSubmit={handleLogin}>
                <input value={email} type="text" placeholder="email .." onChange={e => setEmail(e.target.value)} />
                <input value={password} type="password" placeholder="password .." onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
