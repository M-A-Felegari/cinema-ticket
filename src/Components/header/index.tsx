import React from 'react';
import "./index.css";
import {BiSearch} from "react-icons/bi";

function HomeHeader() {
    return (
        <header>
            <p className="logo">Cinema<span style={{color: "var(--c-secondary)"}}>Ticket</span></p>
            <div className="right"><BiSearch style={{fontSize: 20}}/></div>
        </header>
    );
}

export default HomeHeader;