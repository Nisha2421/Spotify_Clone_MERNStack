import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";
import axios from "axios";

export const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("#121212");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColor", color);      
      const response = await axios.post(`${url}/api/album/add`, formData);
      
      if (response.data.success) {
        toast.success("Album added");
        setDesc("");
        setName("");
        setImage(false);
        setColor("#121212");
      } else {
        toast.error("Somthing went wromg");
      }
    } catch (error) {
      toast.error("Error occured");
    }
    setIsLoading(false)
  };

  return isLoading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600 "
    >
      <div className="flex flex-col gap-4">
        <p>Upload Image</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          accept="image/*"
          hidden
        />
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            className="w-24 cursor-pointer"
            alt=""
          />
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album name</p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="!bg-transparent !outline-green-600 !border-2 !border-gray-400 p-2.5 !w-[max(40vw,250px)]"
          placeholder="Type here"
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album description</p>
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="!bg-transparent !outline-green-600 !border-2 !border-gray-400 p-2.5 !w-[max(40vw,250px)]"
          placeholder="Type here"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <p>Background color</p>
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          type="color"
          className="cursor-pointer"
        />
      </div>
      <button
        className="text-base bg-black text-white py-2.5 px-14 cursor-pointer"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};
