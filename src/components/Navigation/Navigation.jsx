import React from 'react';
import stl from './Navigationr.module.css';
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return (
        <nav className={stl.nav}>
            <div className={stl.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? stl.active : stl.item}>Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/dialogs"className={navData => navData.isActive ? stl.active : stl.item}>Messages</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/news" className={navData => navData.isActive ? stl.active : stl.item}>News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/music" className={navData => navData.isActive ? stl.active : stl.item}>Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? stl.active : stl.item}>Settings</NavLink>
            </div>
        </nav>
    );
};


export default Navigation;