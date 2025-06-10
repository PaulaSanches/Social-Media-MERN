import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'; // Importing Material-UI components
import FileBase64 from 'react-file-base64'; // Importing FileBase64 for file uploads    
import { useDispatch, useSelector } from 'react-redux';  

import useStyles from './styles'; // Importing the styles
import { createPost} from '../../actions/posts'; // Importing the action to create a post
import { updatePost } from '../../actions/posts'; // Importing the action to update a post

//get the current ID of the user
// This component is used to create a new post

const Form = ({currentId, setcurrentId}) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile:'' })// State to hold form data
    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles(); // Using the styles
    const dispatch = useDispatch(); // Using the dispatch function from Redux
    // Function to handle form submission

    useEffect(() => {
        if(post) setPostData(post); // If a post is selected for editing, set the form data to that post's data
    }, [post]); // The effect runs whenever the post changes

    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior

        if(currentId) {
            // If currentId is set, it means we are updating an existing post
            dispatch(updatePost(currentId, postData)); 
            // Dispatching the action to update a post with the form data
        } else {
        dispatch(createPost(postData));
         // Clearing the form after submission
        } 
        clear();// Dispatching the action to create a post with the form data
    }

    const clear = () => {

        setcurrentId(null); // Clearing the current ID
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile:'' }); // Resetting the form data
        
    }

    return (
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a flashback</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></TextField>
                    <div className={classes.fileInput}><FileBase64 type="file" multiple={false}onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth value>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth value>Clear</Button>
                </form>
            </Paper>     
    );
}

export default Form;