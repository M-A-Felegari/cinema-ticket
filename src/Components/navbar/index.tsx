import React from 'react';
import "./index.css";
import {NavLink} from "react-router-dom";
import {BiSolidHome, BiSolidUserCircle} from "react-icons/bi";
import NavbarButton from "./NavbarButton";
import {FaTicketAlt} from "react-icons/fa";

const navButtons = [
    {
        title: 'Home',
        address: '/',
        icon: BiSolidHome
    },
    {
        title: 'Tickets',
        address: '/tickets',
        icon: FaTicketAlt
    },
    {
        title: 'Profile',
        address: '/profile',
        icon: BiSolidUserCircle
    },
]

function Index() {
    return (
        <nav className="navbar">
            <ul>
                {navButtons.map(navButton => (
                    <li key={navButton.title}>
                        <NavLink
                            to={navButton.address}
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            <NavbarButton
                                icon={<navButton.icon style={{fontSize: 20}}/>}
                                title={navButton.title}
                            />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Index;