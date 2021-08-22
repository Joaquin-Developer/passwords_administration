import React, { Fragment } from 'react';
import './App.css';
import Nav from "./components/Nav";
import ShowPasswords from './components/ShowPasswords';

const App = () => {
    return (
        <Fragment>
            <Nav />
            <ShowPasswords></ShowPasswords>
        </Fragment>
    );
}

export default App;
