import React from 'react';
import stl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>

                <DialogItem name="User 1" id="1"/>
                <DialogItem name="User 2" id="2"/>
                <DialogItem name="User 3" id="3"/>
                <DialogItem name="User 4" id="4"/>
                <DialogItem name="User 5" id="5"/>
                <DialogItem name="User 6" id="6"/>


            </div>
            <div className={stl.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="ola"/>
            </div>
        </div>

    )
};

export default Dialogs;