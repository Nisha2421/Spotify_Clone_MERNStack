import React from "react";
import { Routes , Route} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddAlbum } from "./pages/addAlbums";
import Navbar from "./components/Navbar";
import { AddSong } from "./pages/addSong";
import { ListSong } from "./pages/listSong";
import { ListAlbum } from "./pages/listAlbum";
import { Sidebar } from "./components/Sidebar";
export const url = "https://mini-spotify-backend.onrender.com"

const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
             <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
