import React, { Fragment } from 'react';
import './App.css';
import Nav from "./components/Nav";
import PasswAdministrator from './components/PasswAdministrator';

const App = () => {
    return (
        <Fragment>
            <Nav />
            <PasswAdministrator></PasswAdministrator>
        </Fragment>
    );
}

export default App;
