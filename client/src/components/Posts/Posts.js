import React from 'react';
import Post  from './Post/Post'; // Importing the Post component  

import useStyles from './styles'; // Importing the styles


const Posts = () => {
    const classes = useStyles(); // Using the styles
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;