import React, { useContext } from "react";
import "./index.css";
import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";
import Dispay from "./components/Dispay";
import { PlayerContext } from "./context/PlayerContext";
import { LoadingPage } from "../../../chat-app/client/src/pages/LoadingPage";
const App = () => {
  const {songsData, audioRef, track, isLoading} = useContext(PlayerContext);
  if(isLoading){
    return  <LoadingPage />
  }

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Dispay />
          </div>
        </>
      ) :null}
          <Player />

      <audio ref={audioRef} src={track? track.file: null} preload="auto"></audio>
    </div>
  );
};

export default App;
