import React from "react";

export default MusicCard = ({ image, name, description, id }) => {
  return (
    <div
      className="min-w-[180px] p-2 rounded max-h-96 cursor-pointer hover:bg-gray-100 bg-gray-300 transition-colors"
      onClick={() => navigate(`./album/${id}`)}
    >
      <img src={image} alt={name} className="rounded-md" />
      <p className="font-bold mt-2 mb-1 font-muktaVaani line-clamp-1">{name}</p>
      <p className="text-slate-200 text-sm">{description}</p>
    </div>
  );
};
