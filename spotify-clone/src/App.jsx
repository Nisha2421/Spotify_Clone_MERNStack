import React, { useContext } from "react";
import "./index.css";
import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";
import Dispay from "./components/Dispay";
import { PlayerContext } from "./context/PlayerContext";
const App = () => {
  const {songsData, audioRef, track} = useContext(PlayerContext);
  

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Dispay />
          </div>
          <Player />
        </>
      ) : null}

      <audio ref={audioRef} src={track? track.file: null} preload="auto"></audio>
    </div>
  );
};

export default App;
