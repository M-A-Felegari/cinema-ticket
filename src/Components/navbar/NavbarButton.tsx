import React, {ReactNode} from 'react';
import "./NavbarButton.css";
interface NavbarButtonProps {
    icon: ReactNode
    title: string
}

function NavbarButton({icon, title}: NavbarButtonProps) {
    return (
        <div className="navbarButton">
            <div>{icon}</div>
            <p>{title}</p>
        </div>
    );
}

export default NavbarButton;