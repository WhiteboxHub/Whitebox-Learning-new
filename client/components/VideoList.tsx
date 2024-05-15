// components/VideoList.js
import React from "react";

export default function VideoList({ videos }:any) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video:any) => (
        <div key={video.id} className="p-4 border rounded-lg">
          <img src={video.thumbnailUrl} alt={video.title} className="mb-2" />
          <h2 className="text-lg font-semibold">{video.title}</h2>
          <p className="text-sm text-gray-500">{video.description}</p>
        </div>
      ))}
    </div>
  );
}
