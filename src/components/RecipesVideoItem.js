import React from 'react';

const RecipesVideoItem = ({ title, videoUrl }) => {
  return (
    <div className="video-item">
    <iframe
      width="300"
      height="200"
      src={videoUrl}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p>{title}</p>
  </div>
  )
}

export default RecipesVideoItem
