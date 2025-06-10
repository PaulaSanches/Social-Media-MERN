import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core'; // Importing Material-UI components
import { useSelector } from 'react-redux';
import Post  from './Post/Post'; // Importing the Post component  

import useStyles from './styles'; // Importing the styles


const Posts = ({setcurrentId}) => {
    const posts = useSelector((state) => state.posts); // Accessing the posts from the Redux store 
    const classes = useStyles(); // Using the styles

    console.log(posts); // Logging the posts to the console for debugging
    
    return (
        !posts.length ? <CircularProgress className={classes.loading} /> : ( // If there are no posts, show a loading spinner
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => ( // Mapping through the posts and rendering a Post component for each
                    <Grid key={post._id} item xs={12} sm={6} md={6} lg={3}>
                        <Post post={post} setcurrentId={setcurrentId} /> {/* Passing the post as a prop to the Post component */}
                    </Grid>          
                ))}
            </Grid>
    )
)}

export default Posts;