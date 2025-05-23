import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';     
// import { getPosts, createPost } from '../controllers/posts.js';               

const router = express.Router();

//localhost:5000/posts
//http://localhost:5000/posts
// This is a test route to check if the posts route is working

router.get('/', getPosts); // Get all posts
router.post('/', createPost); // Create a post
// router.get('/', (req, res) => {


export default router;