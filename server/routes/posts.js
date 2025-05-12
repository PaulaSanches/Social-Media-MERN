import express from 'express';

const router = express.Router();

//localhost:5000/posts
// This is a test route to check if the posts route is working

router.get('/', (req, res) => {
  res.send('Posts route is working!');
});

export default router;
