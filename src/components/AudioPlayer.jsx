import React, { useContext, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { PlayerContext } from "../context/PlayerContext";
import toast from "react-hot-toast";

export default function AudioPlayer() {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    downloadTrack,
    previous,
    next,
    seekSong,
    toggleRepeat,
    isRepeat,
  } = useContext(PlayerContext);

  const handleTrackChange = (action) => {
    toast.promise(
      action().catch((error) => {
        throw new Error(error.message);
      }),
      {
        loading: "Loading track...",
        success: "Track loaded!",
        error: (err) => {
          return err.message || "Failed to play track.";
        },
      },
      {
        id: "toast",
      }
    );
  };

  const onNext = () => handleTrackChange(next);
  const onPrevious = () => handleTrackChange(previous);

  return (
    <div className="w-full bg-cyan-200 fixed left-0 z-50 right-0 mx-auto bottom-0 shadow-lg flex justify-between items-center text-white p-4">
      {/* Album details */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="Album Art" />
        <div>
          <p>
            {track.name.length > 25
              ? `${track.name.slice(0, 25)}...`
              : track.name}
          </p>
          <p>{track.speaker}</p>
        </div>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <button
            className={`cursor-pointer ${
              isRepeat ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            } p-0.5 rounded-full transition duration-300 ease-in-out`}
            onClick={toggleRepeat}
          >
            <i
              className="fa fa-repeat"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </button>

          <button className="cursor-pointer" onClick={onPrevious}>
            <i className="fa fa-step-backward" aria-hidden="true"></i>
          </button>
          {playStatus ? (
            <button className="cursor-pointer">
              <FaPause onClick={pause} />
            </button>
          ) : (
            <button className="cursor-pointer">
              <FaPlay onClick={play} />
            </button>
          )}
          <button className="cursor-pointer" onClick={onNext}>
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </button>
          <button className="cursor-pointer" onClick={downloadTrack}>
            <i
              className="fa fa-download"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      {/* Volume control */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <i className="fa fa-volume-down" aria-hidden="true"></i>
        <div className="w-20 bg-cyan-50 h-1 rounded"></div>
      </div>
    </div>
  );
}
