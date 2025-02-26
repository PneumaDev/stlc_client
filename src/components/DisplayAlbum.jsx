import React, { useContext } from "react";
import AudioPageNavbar from "./AudioPageNavbar";
import { useParams } from "react-router-dom";
import { albumsData, audioFiles } from "../Utils/data";
import { PlayerContext } from "../context/PlayerContext";
import toast from "react-hot-toast";

export default function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData.find((album) => album.id === Number(id));

  if (!albumData) {
    return <div>Album not found</div>;
  }

  const { playWithId } = useContext(PlayerContext);

  // Function to change track with toast notifications
  const changeTrack = (trackId) => {
    toast.promise(
      playWithId(trackId).catch((error) => {
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

  return (
    <>
      <AudioPageNavbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center px-4">
        {/* Album image */}
        <img
          src={albumData.image}
          alt={albumData.name}
          className="w-48 rounded-l"
        />

        {/* Album details */}
        <div className="flex flex-col">
          <p className="text-sm text-white">Playlist</p>
          <h2 className="text-4xl text-cyan-200 font-bold mb-4 md:text-6xl font-yantramanav">
            {albumData.name}
          </h2>
          <h4 className="font-yantramanav text-white">{albumData.desc}</h4>
          <div className="mt-2 text-gray-200 flex md:flex-row gap-2 md:gap-8 justify-between">
            <div className="hidden lg:block">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1UZfXxNecwHY4-W1lSS8zOWGzar4ZL4hk_3ccbJmG2aXi-ZNANdKEdQ2EvFmDgFd-24&usqp=CAU"
                alt="Logo"
                className="inline-block w-5 mr-2"
              />
              <b className="font-muktaVaani">STLC</b>
            </div>
            <span className="font-imprima font-bold">+10 songs</span>{" "}
            <span className="font-imprima">• about 2 hr 30 min</span>
          </div>
        </div>
      </div>

      {/* Playlist Header */}
      <div className="grid grid-cols-4 sm:grid-cols-6 mt-10 mb-4 pl-2 text-white text-sm font-semibold">
        {/* Increase the width of the title column using col-span */}
        <p className="ml-4 col-span-2">#&nbsp;&nbsp;&nbsp;Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <i className="fa fa-clock m-auto w-4 text-center"></i>
      </div>
      <hr className="border-gray-700 mb-4" />

      {/* Audio Files List */}
      {audioFiles.map((item, index) => (
        <div
          onClick={() => changeTrack(item.id)} // Call changeTrack with the specific track ID
          className="grid grid-cols-4 sm:grid-cols-6 gap-2 items-center text-gray-200 hover:bg-gray-700 cursor-pointer py-2 px-4 rounded-lg"
          key={index}
        >
          {/* Track Number and Title */}
          <p className="text-white flex items-center col-span-2">
            <b className="mr-4 text-gray-300 text-xs sm:text-xs md:text-base lg:text-lg">
              {index + 1}
            </b>
            <img
              src={item.image}
              alt={item.name}
              className="inline w-10 h-10 mr-4 rounded"
            />
            <span className="line-clamp-2 text-gray-300 text-xs sm:text-xs md:text-base lg:text-lg">
              {item.name}
            </span>
          </p>

          {/* Album */}
          <p className="line-clamp-2 text-gray-300 text-xs sm:text-xs md:text-base lg:text-lg">
            {albumData.name}
          </p>
          <p className="hidden sm:block text-gray-300 text-xs sm:text-xs md:text-base lg:text-lg">
            5 days ago
          </p>
          <p className="text-center text-gray-300 text-xs sm:text-xs md:text-base lg:text-lg">
            {item.duration}
          </p>
        </div>
      ))}
      <hr className="border-none my-4" />
    </>
  );
}
