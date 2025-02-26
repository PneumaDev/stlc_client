import { createContext, useEffect, useRef, useState } from "react";
import { audioFiles } from "../Utils/data";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null); // Initialize as null
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(audioFiles[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: "00",
      minute: "00",
    },
    totalTime: {
      second: "00",
      minute: "00",
    },
  });

  const play = () => {
    audioRef.current?.play(); // Use optional chaining
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause(); // Use optional chaining
    setPlayStatus(false);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(audioFiles[track.id - 2]);
      await audioRef.current?.play(); // Use optional chaining
    }
  };

  const toggleRepeat = () => {
    setIsRepeat((prev) => !prev); // Toggle repeat state
  };

  const next = async () => {
    try {
      if (track.id < audioFiles.length - 1) {
        // Ensure index is valid
        await setTrack(audioFiles[track.id + 1]);
        await audioRef.current?.play(); // Use optional chaining
      }
    } catch (error) {
      console.error(error); // Log the error
    }
  };

  const seekSong = async (e) => {
    if (audioRef.current) {
      // Ensure audioRef.current is defined
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration;
    }
  };

  const playWithId = async (id) => {
    try {
      // Check for network connection
      if (!navigator.onLine) {
        throw new Error("No internet connection.");
      }

      // Ensure the id is within the valid range
      if (id < 1 || id > audioFiles.length) {
        throw new Error("Invalid audio track ID.");
      }

      // Check if the requested track is already playing
      if (track.id === audioFiles[id - 1].id && playStatus) {
        throw new Error("Track is already playing!");
      }

      setIsLoading(true);

      // Set the track based on the provided ID
      setTrack(audioFiles[id - 1]);

      // Load the audio and wait for metadata
      audioRef.current?.load(); // Use optional chaining

      // Create a promise that resolves when metadata is loaded
      const metadataPromise = new Promise((resolve, reject) => {
        audioRef.current.onloadedmetadata = () => {
          resolve();
        };

        audioRef.current.onerror = (error) => {
          reject(new Error("Failed. Check your connection!"));
          setPlayStatus(false);
        };
      });

      // Wait for metadata to load and then play the audio
      await metadataPromise;
      audioRef.current?.play();
      setPlayStatus(true);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Download function
  const downloadTrack = () => {
    const trackUrl = track.audioUrl;
    const link = document.createElement("a");
    link.href = trackUrl;
    link.download = track.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper function to format time with two digits
  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current?.duration && audioRef.current?.currentTime) {
        // Update the seekBar width based on the current time and duration
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        // Update the time state with formatted values
        setTime({
          currentTime: {
            second: formatTime(Math.floor(audioRef.current.currentTime % 60)),
            minute: formatTime(Math.floor(audioRef.current.currentTime / 60)),
          },
          totalTime: {
            second: formatTime(Math.floor(audioRef.current.duration % 60)),
            minute: formatTime(Math.floor(audioRef.current.duration / 60)),
          },
        });
      }
    };

    // Delay time updates for proper calculation after the audio starts playing
    setTimeout(() => {
      audioRef.current.ontimeupdate = handleTimeUpdate;
    }, 1000);

    audioRef.current.onended = () => {
      if (isRepeat) {
        audioRef.current?.play();
      } else {
        setPlayStatus(false);
      }
    };

    // Cleanup when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, [audioRef, track, isRepeat]); // Add isRepeat to dependency array

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    isLoading,
    play,
    pause,
    playWithId,
    downloadTrack,
    previous,
    next,
    seekSong,
    isRepeat,
    toggleRepeat,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} src={track.audioUrl} />
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
