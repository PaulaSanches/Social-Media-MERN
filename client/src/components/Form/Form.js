import React, { useState } from 'react';
import { Textfield, Button, Typography, Paper } from '@material-ui/core'; // Importing Material-UI components
import FileBase64 from 'react-file-base64'; // Importing FileBase64 for file uploads    


import useStyles from './styles'; // Importing the styles

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' }); // State to hold form data
    const classes = useStyles(); // Using the styles

    const handleSubmit = () => {
    }

    const clear = () => {
        
    }

    return (
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a flashback</Typography>
                    <Textfield name="creator" variant="outlined" label="Creator" fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></Textfield>
                    <Textfield name="title" variant="outlined" label="Title" fullWidthvalue={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}></Textfield>
                    <Textfield name="message" variant="outlined" label="Message" fullWidthvalue={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })}></Textfield>
                    <Textfield name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></Textfield>
                    <div className={classes.fileInput}><FileBase64 type="file" multiple={false}onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidthvalue>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidthvalue>Clear</Button>
                </form>
            </Paper>     
    );
}

export default Form;