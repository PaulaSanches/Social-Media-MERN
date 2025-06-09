import PostMessage from '../models/PostMessage.js';
// import PostMessage from '../models/PostMessage.js';

export const getPosts = async (req, res) => {
  try { 
    const postMessages = await PostMessage.find(); // Fetch all posts from the database

    console.log(postMessages); // Log the posts to the console for debugging
    // res.status(200).json(postMessages); // Send the posts as a JSON response
    res.status(200).json(postMessages); // Send the posts as a JSON response
  }
  catch (error) {
    res.status(404).json({ message: error.message }); // Send an error message if something goes wrong
  } 
}

export const createPost = async (req, res) => {

  const post = req.body; // Get the post data from the request body
  const newPost = new PostMessage(post); // Create a new PostMessage instance with the post data

  try {
    await newPost.save(); // Save the new post to the database

    res.status(201).json(newPost); // Send the new post as a JSON response
    // restapitutorial.com.com/lessons/httpstatuscodes.html
    // 201 Created - The request has been fulfilled and resulted in a new resource being created.
    // 409 Conflict - The request could not be completed due to a conflict with the current state of the resource.
  }
  catch (error) {
    res.status(409).json({ message: error.message }); // Send an error message if something goes wrong
  }
  res.send('Post created successfully');
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params; // Get the post ID from the request parameters
  const post = req.body; // Get the updated post data from the request body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id'); // Check if the ID is valid

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }); // Update the post in the database

  res.json(updatedPost); // Send the updated post as a JSON response
}