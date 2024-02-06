import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./Components/navbar";
import HomeHeader from "./Components/header";

function App() {
    return (
        <div className="app">
            <HomeHeader/>
            <Outlet/>
            <div className='marginToShowContentsBehindNavbar'></div>
            <Navbar/>
        </div>
    );
}

export default App;
