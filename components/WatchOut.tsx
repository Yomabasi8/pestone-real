import { useRef, useState } from "react";

const videos = [
  { src: "/watch-out-1.mp4", poster: "/Images/watch-out-1-poster.jpg" },
  { src: "/watch-out-2.mp4", poster: "/Images/watch-out-2-poster.jpg" },
  { src: "/watch-out-3.mp4", poster: "/Images/watch-out-3-poster.jpg" },
];

function VideoCard({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-brand-black-dark shadow-md">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors duration-200 group"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-200">
            <svg className="w-6 h-6 text-brand-black-dark translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function WatchOut() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Coming Soon
          </span>
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
            Watch Out!
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-black-light max-w-3xl leading-relaxed tracking-[-1px]">
            A new industrial avenue for your exportation and warehousing, your hotels and airport hospitality, all within the Ogun State Free Trade Zone.
            <br />
            Get ready for an investment that will change the trajectory of the business district of Ogun State and Lagos metropolis.
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard key={video.src} src={video.src} poster={video.poster} />
          ))}
        </div>

      </div>
    </section>
  );
}
