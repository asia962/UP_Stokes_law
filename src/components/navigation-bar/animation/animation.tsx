import React, { useState } from "react";
import './animation.css';

const Animation: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="video-container">
      {loading &&
      <div className="loading-container">
        <div className="loader"></div>
        <p>Ładowanie wideo...</p>
      </div>}
      <iframe
      className={loading ? "hidden" : ""}
      width="560"
      height="315"
      src="https://www.youtube.com/embed/mQwlmXtRu5k?si=PR_PQOs-jMjx9cBW"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      onLoad={() => setLoading(false)}
      ></iframe>
      <p className="source">Źródło: MeitY OLabs - https://www.youtube.com/watch?v=mQwlmXtRu5k</p>
    </div>
  );
} 

export default Animation;