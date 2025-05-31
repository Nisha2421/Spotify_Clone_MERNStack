import axios from "axios";
import React from "react";
import { useState } from "react";
import { url } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ListAlbum = () => {
  const [data, setData] = useState([]);
  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.album);
      } else {
        toast.error("Somthing went wromng");
      }
    } catch (error) {
      toast.error("Somthing went wromng");
    }
  };
  useEffect(() => {
    fetchAlbum();
  }, []);
  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbum();
      } else {
        toast.error("somthing went wrong");
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };
  return (
    <div>
      <p>All Albums list</p>
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-s mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Decription</b>
          <b>Album colour</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img src={item.image} className="w-12" alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColor} />
              <p
                className="cursor-pointer"
                onClick={() => removeAlbum(item._id)}
              >
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
