import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'; // Importing Material-UI components
import FileBase64 from 'react-file-base64'; // Importing FileBase64 for file uploads    
import { useDispatch } from 'react-redux';  

import useStyles from './styles'; // Importing the styles
import { createPost } from '../../actions/posts'; // Importing the action to create a post

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' }); // State to hold form data
    const classes = useStyles(); // Using the styles
    const dispatch = useDispatch(); // Using the dispatch function from Redux
    // Function to handle form submission

    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior
        dispatch(createPost(postData)); // Dispatching the action to create a post with the form data
    }

    const clear = () => {
        
    }

    return (
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a flashback</Typography>
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