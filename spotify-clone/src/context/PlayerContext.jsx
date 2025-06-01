import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
export const PlayerContext = createContext(null);

export const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const url = "http://localhost:8000/api"
  const [songsData, setSongsData] = useState([])
  const [albumsData, setAlbumsData] = useState([])
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const playAudio = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pauseAudio = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  const playWidthId = async (id) => {
    await songsData.forEach((item) => {
      if(id === item._id){
        setTrack(item)
      }
    })
    await audioRef.current.play()
    setPlayStatus(true)
  };
  const previous = async () => {
    songsData.map(async (item, index) => {
      if(track._id === item._id && index>0){
        await setTrack(songsData[index - 1])
        await audioRef.current.play()
        setPlayStatus(true)
      }
    })
  };
  const seeksSong = async (event) => {
    audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
  }
  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/song/list`);
      
      setSongsData(response.data.songs)
      setTrack(response.data.songs[0])
    } catch (error) {
      
    }
  }
    const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/album/list`);
      setAlbumsData(response.data.album)
    } catch (error) {
      
    }
  }
  const next = async () => {
    songsData.map(async (item, index) => {      
      if(track._id === item._id && index < songsData.length-1){
        await setTrack(songsData[index + 1])
        await audioRef.current.play()
        setPlayStatus(true)
      }
    })
  };
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);
  useEffect(() => {
    getSongsData()
      getAlbumsData()
  },[])
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    playAudio,
    pauseAudio,
    track,
    playStatus,
    time,
    setTrack,
    setPlayStatus,
    setTime,
    playWidthId,
    previous,
    next,
    seeksSong,
    songsData,
    albumsData
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
