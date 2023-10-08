import React from 'react';
import Image from "next/image";

type PhotoProps = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const PhotoCard: React.FC<PhotoProps> = ({ albumId, id, title, url, thumbnailUrl }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white my-4 flex space-x-4">
      <Image width={16} height={16} src={thumbnailUrl} alt={title} className="w-16 h-16 object-cover rounded-md" />
      <div>
        <h2 className="text-sm font-medium mb-2 truncate">{title}</h2>
        <div className="text-xs text-gray-500">
          <span>Photo ID: {id}</span>
          <span className="ml-4">Album ID: {albumId}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
