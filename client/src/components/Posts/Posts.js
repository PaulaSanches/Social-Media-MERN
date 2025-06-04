import React from 'react';
import { useSelector } from 'react-redux';
import Post  from './Post/Post'; // Importing the Post component  

import useStyles from './styles'; // Importing the styles


const Posts = () => {
    const posts = useSelector((state) => state.posts); // Accessing the posts from the Redux store 
    const classes = useStyles(); // Using the styles

    console.log(posts); // Logging the posts to the console for debugging
    
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;