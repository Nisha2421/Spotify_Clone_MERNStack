import express from 'express'
import { addAlbum, listAlbum, renoveAlbum } from '../controllers/albumController.js'
import { upload } from '../middleware/multer.js'

export const albumRoute = express.Router()
albumRoute.post("/add",upload.single('image'), addAlbum)
albumRoute.get("/list", listAlbum)
albumRoute.post("/remove", renoveAlbum)