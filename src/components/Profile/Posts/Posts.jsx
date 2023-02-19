import React from 'react';
import stl from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <div className={stl.wrapper}>
                <h3>My posts</h3>
                <div>
                    <div></div>
                    <div>
                    <button>Add post</button>
                    <button>Remove</button>
                    </div>
                </div>
                <div className={stl.content}>
                    <Post message='First post' likeCount=' 10'/>
                    <Post message='Second post' likeCount=' 15'/>
                    <Post message='Third post' likeCount=' 24'/>
                </div>
            </div>

        </div>
    );
};

export default Posts;