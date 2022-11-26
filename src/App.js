import React from 'react';
import './App.css';
import { Navbar, Infobar } from './components';
import { Bio, BioText, Achievements, AchievementsText, Experience, ExperienceText, Projects, ProjectsText, Thanks } from "./containers";

const App = () => {
    return (
        <div className="App">
            <Bio/>
        </div>
    )
}

export default App