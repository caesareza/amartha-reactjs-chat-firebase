import React from 'react';
import './site.scss';
import Home from './pages/home';
import Daftar from './pages/daftar';
import Login from './pages/login';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="pages">
            <Router>

                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/daftar">Daftar Baru</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>


                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/daftar" component={Daftar} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
