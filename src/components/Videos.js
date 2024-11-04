import React from 'react';
import './HorizontalScroll.css';

function Videos({ videoLinks }) {
  return (
    <section id="videos">
      <h2>Related Videos</h2>
      <div className="horizontal-scroll">
        {videoLinks.map((link, index) => (
          <iframe
            key={index}
            src={link}
            title={`video-${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            className="video-frame"
          ></iframe>
        ))}
      </div>
    </section>
  );
}

export default Videos;
