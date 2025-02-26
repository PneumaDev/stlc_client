import React, { useEffect, useRef } from "react";
import DisplayHome from "../components/DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../Utils/data";

export default function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  // Extract the albumId from the URL
  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  // Parse the albumId to a number
  const albumIndex = Number(albumId);

  // Check if albumIndex is a valid index
  const album = albumsData[albumIndex - 1];
  const bgColor = album ? album.bgColor : null;

  useEffect(() => {
    if (isAlbum && bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#3C3D37`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="m-2 px-6 pt-4 rounded-lg shadow-2xl bg-blue-gray-200 mb-24 mx-4 text-black overflow-auto w-full flex flex-col justify-center"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}
