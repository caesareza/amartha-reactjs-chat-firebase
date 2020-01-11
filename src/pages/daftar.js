import React, { useState } from 'react';
import firebase from '../firebase';

export default function Daftar(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function daftarSiswa(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(sukses => {
                console.log('sukses');
            })
            .catch(gagal => {
                console.log(gagal.code);
                console.log(gagal.message);
            })
        // props.history.push("/");
    }

    return(
        <div>
            <h1 title="Daftar">Daftar Siswa Baru</h1>
            <form onSubmit={daftarSiswa}>
                <input value={name} type="text" placeholder="name .." onChange={e => setName(e.target.value)} />
                <input value={email} type="text" placeholder="email .." onChange={e => setEmail(e.target.value)} />
                <input value={password} type="password" placeholder="password .." onChange={e => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
