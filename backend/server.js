import express from 'express'
import { postsRoutes } from './routes/postsRoutes.js';
import { usersRoutes } from './routes/usersRoutes.js';
import mongoose from 'mongoose';


const app = express();

app.use(express.json()); // middleware that intercepts requests but must be json

app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)

//"mongodb://localhost:27017"

mongoose.connect("mongodb://localhost:27017", { dbName: "demo_db" }).then(()=>{
  console.log("Connected to DB successfully")
})
.catch((error) => {console.log("error", error)})

app.listen(4000, 'localhost', () => console.log("Listening to port 4000"))
