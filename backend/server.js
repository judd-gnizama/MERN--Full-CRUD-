import express from 'express'
import { postsRoutes } from './routes/postsRoutes.js';
import { usersRoutes } from './routes/usersRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors'

import path from 'path'
import { fileURLToPath } from "url"

// Resolving dirname for ES module

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


const app = express();

const mode = process.env.NODE_ENV

const corsOptions = mode === 'development' ? {
  origin: '*'
} : {
  origin: process.env.FRONTEND_URL_DEPLOY,
  methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],  // Allowed headers
  credentials: true // Optional: Allow cookies or authorization credentials (if applicable)
};

const corsMiddleware = cors(corsOptions);

app.use(corsMiddleware);

app.use(express.json()); // middleware that intercepts requests but must be json

app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)


// use the client app
app.use(express.static(path.join(__dirname,'/frontend/dist')))

// Render client for any path
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname,'/frontend/dist')))


//"mongodb://localhost:27017"

mongoose.connect(process.env.DB_URI, { dbName: "demo_db" }).then(()=>{
  console.log("Connected to DB successfully")
})
.catch((error) => {console.log("error", error)})

app.listen(4000, () => console.log("Listening to port 4000"))
