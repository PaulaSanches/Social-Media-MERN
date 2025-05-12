import express from 'express';

import { getPosts } from '../controllers/posts.js';    

const router = express.Router();

//localhost:5000/posts
// This is a test route to check if the posts route is working

router.get('/', getPosts); // This is a test route to check if the posts route is working

export default router;
