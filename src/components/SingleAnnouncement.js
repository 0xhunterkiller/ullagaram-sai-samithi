import React from 'react';
import './SingleAnnouncement.css';

function SingleAnnouncement({ title, onClick }) {
  return (
    <div className="single-announcement" onClick={onClick} tabIndex={0} role="button">
      <p>{title}</p>
    </div>
  );
}

export default SingleAnnouncement;
