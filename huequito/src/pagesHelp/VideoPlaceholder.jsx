import React, { useState } from "react";

const VideoPlaceholder = () => {
    
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="relative w-full h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            {showVideo ? (
                <iframe
                    src="https://www.youtube.com/embed/Z3qYJk307Po"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                />
            ) : (
                <button
                    onClick={() => setShowVideo(true)}
                    className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-xl flex items-center justify-center"
                    >
                    <div className="flex-col justify-center">
                        <h2 className="font-bold w-full text-center md:text-2xl pb-2">
                            Sugerencias para Fachadas
                        </h2>
                        <img
                        src="/images/dibujos/foto_video.png"
                        alt="Placeholder del Video"
                        className="w-full max-w-96 md:w-full"
                        />
                    </div>
                    
                </button>
            )}
        </div>
    );
};

export default VideoPlaceholder;