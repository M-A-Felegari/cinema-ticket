import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./Components/navbar";

function App() {
    return (
        <div className="app">
            <Outlet/>
            <div className='marginToShowContentsBehindNavbar'></div>
            <Navbar/>
        </div>
    );
}

export default App;
