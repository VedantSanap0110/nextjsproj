"use client";
import React, { useRef, useState } from "react";

interface VideoCardProps {
  videoPath: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoPath, title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
 
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
        {title && (
          <div className="absolute top-0 left-0 right-0 z-10 p-3 bg-gradient-to-b from-black/70 to-transparent">
            <h3 className="text-white font-medium truncate text-lg">{title}</h3>
          </div>
        )}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoPath}
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
          onError={() => console.error("Video failed to load")}
        />
        
        {/* Play/Pause overlay that uses the isPlaying state */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="bg-black/30 rounded-full p-4 transition-all duration-300 hover:bg-black/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Parent Component
const Videoplay: React.FC = () => {
  const videoTitles = [
    "Turn Followers Into Customers",
    "Consistent Organic Growth",
    "Predictable Revenue System",
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black to-[#222222] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Our System In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven system brings you consistent organic followers and predictably turns them into paying customers!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((num, index) => (
            <VideoCard 
              key={`video${num}`} 
              videoPath={`/video/v${num}.mp4`} 
              title={videoTitles[index]}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videoplay;