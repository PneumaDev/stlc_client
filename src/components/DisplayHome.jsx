import React from "react";
import AudioPageNavbar from "./AudioPageNavbar";
import { albums, audioFiles } from "../Utils/data";
import AlbumItem from "./AlbumItem";

export default function DisplayHome() {
  return (
    <div className="">
      <AudioPageNavbar />
      <AlbumItem title="Albums" items={albums} delay={3000} type="album" />
      <AlbumItem title="Sermons" items={audioFiles} delay={6000} type="music" />
      <AlbumItem title="Chants" items={audioFiles} delay={4000} type="music" />
      <AlbumItem title="Worship" items={audioFiles} delay={5000} type="music" />
    </div>
  );
}
