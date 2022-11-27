import React from 'react';
import './App.css';
import { Bio, BioText, Achievements, AchievementsText, Experience, ExperienceText, Projects, ProjectsText, Thanks } from "./containers";

const App = () => {
    return (
        <div className="App">
            <Bio/>
            <BioText/>
            <Projects/>
            <ProjectsText/>
            <Experience/>
            <ExperienceText/>
            <Achievements/>
            <AchievementsText/>
            <Thanks/>
        </div>
    )
}

export default App