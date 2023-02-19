import React from "react";
import stl from './Header.module.css';

const Header = () => {
    return (
        <header className={stl.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/86/86142.png" alt="img"/>
        </header>
    );
};

export default Header;