import express from'express';
import cors from 'cors';
import 'dotenv/config'
import {songRoute} from './src/routes/songRoute.js';
import connectDB, { disConnectDB } from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import { albumRoute } from './src/routes/albumRoute.js';


// App config
const app = express()
const port = process.env.port || 8000;
connectDB();
connectCloudinary()
// disConnectDB()


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// initializing routes
app.use("/api/song",songRoute)
app.use("/api/album", albumRoute)
app.get("/",(req, res) => res.send("API Working "))

app.listen(port, () => console.log(`Server stated on ${port}`)
)