import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
import Project7 from "./Project7";
import Project8 from "./Project8";
import Project9 from "./Project9";
import Project10 from "./Project10";
import Contact from "./Contact";
import './App.css';


const App = () => {





    return ( 
        <BrowserRouter>
            <NavBar />        
            <Routes>
                <Route exact path="/" element={<About />}/>
                <Route exact path="/portfolio" element={<Portfolio />}/>
                <Route exact path="/project1" element={<Project1 />}/>
                <Route exact path="/project2" element={<Project2 />}/>
                <Route exact path="/project3" element={<Project3 />}/>
                <Route exact path="/project4" element={<Project4 />}/>
                <Route exact path="/project5" element={<Project5 />}/>
                <Route exact path="/project6" element={<Project6 />}/>
                <Route exact path="/project7" element={<Project7 />}/>
                <Route exact path="/project8" element={<Project8 />}/>
                <Route exact path="/project9" element={<Project9 />}/>
                <Route exact path="/project10" element={<Project10 />}/>
                <Route exact path="/contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
        );
};

export default App;