import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';   

import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connect to MongoDB Atlas https://www.mongodb.com/docs/atlas/connect-to-cluster/

const CONNECTION_URL = 'mongodb+srv://paulajcbarri3ntos:mongolico-1234@cluster0.rkpemis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
