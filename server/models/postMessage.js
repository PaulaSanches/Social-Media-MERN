import mongoose from "mongoose";    

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema); // This is the model that will be used to create the posts in the database

export default PostMessage; // This is the model that will be used to create the posts in the database