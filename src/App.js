import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";

import './App.css';
import PageTransition from "./Components/PageTransition";
import AnimatedRoutes from "./Components/AnimatedRoutes";



const App = () => {

    return ( 
        <BrowserRouter>
            <NavBar />        
            <AnimatedRoutes/>
        </BrowserRouter>
        );
};

export default App;