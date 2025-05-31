import express from 'express'
import { addSong, listSong, removeSong } from '../controllers/songsController.js';
import { upload } from '../middleware/multer.js';

export const songRoute = express.Router()
songRoute.post("/add",upload.fields([{name:'image',maxcount:1},{name:'audio',maxcount:1}]),addSong)
songRoute.get("/list",listSong)
songRoute.post("/remove",removeSong)

