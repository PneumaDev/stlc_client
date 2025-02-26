import React, { useContext } from "react";
import AudioPlayer from "../components/AudioPlayer";
import Display from "../components/Display";
import { PlayerContext } from "../context/PlayerContext";
import { Toaster } from "react-hot-toast";

export default function Audios() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="">
      <Toaster toastOptions={{ className: "font-yantramanav" }} />
      <div className="flex flex-col items-center mx-4">
        <Display />
      </div>
      <AudioPlayer />
      <audio preload="auto" ref={audioRef} src={track.audioUrl}></audio>
    </div>
  );
}
