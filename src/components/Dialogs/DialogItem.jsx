import React from 'react';
import {NavLink} from "react-router-dom";
import stl from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={stl.dialog + ' ' + stl.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;