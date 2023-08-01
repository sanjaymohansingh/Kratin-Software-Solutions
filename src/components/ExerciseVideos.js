import React, { useState } from "react";
import ExerciseVideoItem from "./ExerciseVideoItem";
import "../styles/exercise-videos.css";

const ExerciseVideos = () => {
  const initialVideos = [
    {
      title: "Video 1",
      videoUrl: "https://www.youtube.com/embed/3ojB9kC6354",
    },
    {
      title: "Video 2",
      videoUrl: "https://www.youtube.com/embed/MYjSMqqzc6k",
    },
    {
      title: "Video 3",
      videoUrl: "https://www.youtube.com/embed/g5fvBKRruC4",
    },
  ];

  const additionalVideos = [
    {
      title: "Video 4",
      videoUrl: "https://www.youtube.com/embed/Uej2oz7anck",
    },
    {
      title: "Video 5",
      videoUrl: "https://www.youtube.com/embed/1mNKzIrGZc4",
    },
    {
      title: "Video 6",
      videoUrl: "https://www.youtube.com/embed/v-uQkYWreHc",
    },
    {
      title: "Video 7",
      videoUrl: "https://www.youtube.com/embed/yQ0G5x5hI28",
    },
    {
      title: "Video 8",
      videoUrl: "https://www.youtube.com/embed/rcJH8QcLZw8",
    },
    {
      title: "Video 9",
      videoUrl: "https://www.youtube.com/embed/H237b4KkHO0",
    },
    {
      title: "Video 10",
      videoUrl: "https://www.youtube.com/embed/FDeyqEduY3c",
    },
    {
      title: "Video 11",
      videoUrl: "https://www.youtube.com/embed/g5HeVRgcGD8",
    },
    {
      title: "Video 12",
      videoUrl: "https://www.youtube.com/embed/0unqhhO9od0 ",
    },
    {
      title: "Video 13",
      videoUrl: "https://www.youtube.com/embed/SwoL052lfpc",
    },
    {
      title: "Video 14",
      videoUrl: "https://www.youtube.com/embed/uDvN2nPkq2Q ",
    },
  ];

  const [showAllVideos, setShowAllVideos] = useState(false);

  return (
    <div className="video-content">
      <h2>Exercise Videos</h2>
      <div className="video-container">
        {initialVideos.map((video) => (
          <ExerciseVideoItem
            key={video.title}
            title={video.title}
            videoUrl={video.videoUrl}
          />
        ))}
        {showAllVideos &&
          additionalVideos.map((video) => (
            <ExerciseVideoItem
              key={video.title}
              title={video.title}
              videoUrl={video.videoUrl}
            />
          ))}
        {!showAllVideos && (
          <div className="see-all" onClick={() => setShowAllVideos(true)}>
            See All
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseVideos;
