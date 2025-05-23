import React from 'react';
import Post  from './Post/Post.js'; // Importing the Post component



const Posts = () => {
    return (
        <>
            <h1>Posts Component</h1>
            <Post />
            <Post />
            <Post />
        </>
    );
}

export default Posts;