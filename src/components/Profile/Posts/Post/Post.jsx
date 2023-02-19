import React from 'react';
import stl from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={stl.post_item}>
                <img
                    src="https://w7.pngwing.com/pngs/355/325/png-transparent-computer-icons-user-encapsulated-postscript-business-man-miscellaneous-company-monochrome.png"
                    alt="userAva"/>
                {props.message}
            </div>
            <span className={stl.likes}>like
                {props.likeCount}
        </span>
        </div>
    );
};

export default Post;