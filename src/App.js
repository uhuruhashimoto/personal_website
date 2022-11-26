import React from 'react';
import './App.css';
import { Navbar, Infobar } from './components';
import { Achievements, Experience, Projects, Thanks } from "./containers";

const App = () => {
    return (
        <div className="App">            <Achievements/>
            <Experience/>
            <Projects/>
            <Thanks/>
        </div>
    )
}

export default App