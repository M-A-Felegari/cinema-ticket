import React from 'react';
import "./index.css";
import {NavLink} from "react-router-dom";
import {BiSolidHome, BiSolidUserCircle} from "react-icons/bi";
import NavbarButton from "./NavbarButton";
import {RiChatHistoryFill} from "react-icons/ri";

function Index() {
    return (
        <nav className="navbar">
            <ul>
                {/*TODO:make this in an object*/}
                <li>
                    <NavLink to="/"
                             className={({isActive}) => (isActive ? 'active' : '')}
                    ><NavbarButton
                        icon={<BiSolidHome
                            style={{fontSize: 20}}
                        />}
                        title="Home"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/history"
                             className={({isActive}) => (isActive ? 'active' : '')}
                    ><NavbarButton
                        icon={<RiChatHistoryFill
                            style={{fontSize: 20}}
                        />}
                        title="History"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile"
                             className={({isActive}) => (isActive ? 'active' : '')}
                    ><NavbarButton
                        icon={<BiSolidUserCircle
                            style={{fontSize: 20}}
                        />}
                        title="Profile"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Index;