import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'; // Importing Material-UI components
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'; // Importing the ThumbUp icon
import DeleteIcon from '@material-ui/icons/Delete'; // Importing the Delete icon 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; // Importing the MoreHoriz icon
import moment from 'moment'; // Importing moment.js for date formatting
import useStyles from './styles'; // Importing the styles
import { useDispatch } from 'react-redux'; // Importing useDispatch from Redux
import { deletePost, likePost } from '../../../actions/posts'; // Importing the action to delete a post   
// Importing the action to delete a post
// This component is used to display a single post


const Post = ({post, setcurrentId}) => {
    const classes = useStyles(); // Using the styles
    const dispatch = useDispatch(); // Using the dispatch function from Redux
    // Function to handle post deletion
    return (
        <Card className={classes.card}> 
            <h1>Post</h1>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} 
                        size="small" 
                        onClick={() => setcurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography> 
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>  
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>        
    );
}

export default Post;