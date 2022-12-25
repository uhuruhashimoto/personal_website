import React from 'react';
import './projectstext.css';

const ProjectsText = () => {
  return (
    <div className='website__projectstext'>
    <div className='website__projectstext-description'>
        <p1 className="website__projectstext-description__title1">
            Software Development<br></br>
        </p1>
        <p2>
            <h href="#meshtastic">Meshtastic</h><br></br>
            Implemented dataflow and backend for mesh network for use in emergency response, including mesh network algorithm optimization and dataflow. TS, C++, Rust. Fall 2022; development ongoing<br></br>
        </p2>
        <p3>
            <h>Yalnix </h><br></br>
            Wrote 'Nix-style monolithic, preemptive, ring-0-only kernel with double address space to run on Ubuntu (with configured signal handlers). C. Fall 2022<br></br>
        </p3>
        <p4>
            <h>AR Gift App on Android </h><br></br>
            User login, verification, and virtual token system. Unity integration and scripting. Java, C#. Winter 2021<br></br>
        </p4>
        <p5>
            <h>Blockchain Playlist Voting System </h><br></br>
            Song queue selected by blockchain verification of voters. Mining incentivized. Python. Spring 2021<br></br>
        </p5>
        <p6>
            <h>Simulated Y86 Architecture </h><br></br>
            Built 'Y86' X86 simulated architecture from transistor level up. Runs on abbreviated X86 ISA. Includes mmapped terminal and read/write functionality. Run hello world or simple programs (ported to hex)! Assembly. Spring 2022<br></br>
        </p6>
        <p7>
            <h>Search Engine </h><br></br>
            Query parsing, recursive web crawling, and result ranking algorithm. C. Summer 2021<br></br>
        </p7>
        <p8>
            <h>Neural Network </h><br></br>
            ML modeling on MNIST dataset with 96% accuracy using Jupyter Notebook. Python. Spring 2021<br></br>
        </p8>
        <p9>
            <h>Sudoku Solver </h><br></br>
            Recursive DFS with some branch optimization to meet runtime requirements. C. Summer 2021<br></br>
        </p9>
        <p10 className="website__projectstext-description__title2">
            Embedded Systems Development<br></br>
        </p10>
        <p11>
            <h>Wordle on FPGA </h><br></br>
            On-chip resource allocation and state machine functionality for integrated circuit design. 100 MHz clock speed. Runs on full Wordle dictionary. Xilinx Vivido, VHDL. Spring 2022<br></br>
        </p11>
        <p12>
            <h>Arduino Projects </h><br></br>
            bare-metal code projects (pwm driver, register signal handlers, network FSM). C. Spring 2022<br></br> 
        </p12>
        <p13 className="website__projectstext-description__title3">
            Power Electronics<br></br>
        </p13>
        <p14>
            <h>Benchtop AC/DC Converter </h><br></br>
            High-Power Rectifier, using Discontinuous Indirect Converter and inductor built to specifications. Graduate Power Electronics. Fall 2022<br></br>
        </p14>
        <p15>
            <h>Duck Car with Feedback Control </h><br></br>
            PD Control of Duck Car and accompanying Frequency Domain Analysis. Hardware tested. Fall 2021<br></br>
        </p15>
        <p16>
            <h>Breadboard Heart Rate Monitor </h><br></br>
            Electret microphone signal processing, filtering, Class D amplification on breadboards. User tested. Winter 2022<br></br>
        </p16>

    </div>
</div>
  )
}

export default ProjectsText