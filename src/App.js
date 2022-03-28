import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Navibar from "./Components/Navibar";
import Footer from "./Components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Home } from './Pages/Home';
import { Users } from './Pages/Users';
import { About } from './Pages/About';



function App() {
    return (
        <>
            <Router>
                <Navibar/>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/users"} component={Users} />
                    <Route path={"/about"} component={About} />
                </Switch>
            </Router>

            <Footer />
        </>
    );
}

export default App;
