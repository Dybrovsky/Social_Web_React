import React from 'react';
import stl from "./Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={stl.dialog}>
            {props.message}
        </div>
    );
};

export default Message;
