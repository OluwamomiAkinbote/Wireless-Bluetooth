import { useState } from "react";
import { Play } from "lucide-react";
import sampleVideo from "../assets/Video-4.mp4"; 
import thumbnail from "../assets/amazon-d.jpg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6">
      {!isPlaying ? (
        <div className="relative cursor-pointer group" onClick={() => setIsPlaying(true)}>
          {/* Thumbnail (Replace with an actual image) */}
          <img
            src= {thumbnail} // Use an actual thumbnail image
            alt="Video Thumbnail"
            className="w-full transition-opacity duration-300 group-hover:opacity-80"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <button className="bg-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-black" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <video 
            src={sampleVideo} 
            controls 
            autoPlay 
            className="w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
