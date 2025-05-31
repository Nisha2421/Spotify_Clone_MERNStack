import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
const addSong = async (req, res) => {
  try {
    console.log("added  song",req);
    
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audio = req.files.audio[0];
    const image = req.files.image[0];
    const audioUpload = await cloudinary.uploader.upload(audio.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };
    const song = songModel(songData);
    await song.save();
    res.json({ success: true, message: "song added" });
  } catch (error) {
    res.json({ success: false });
  }
};
const listSong = async (req, res) => {
  try {
    const allsongs = await songModel.find({});
    res.json({ success: true, songs: allsongs });
  } catch (error) {
    req.json({ success: false });
  }
};
const removeSong = async (req, res) => {
  try {    
    await songModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "song deleted" });

  } catch (error) {
    console.log("error",error);
    
        res.json({ success: false });
  }
};
export { addSong, listSong, removeSong };
