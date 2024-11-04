import React from 'react';
import './ThoughtOfTheDay.css';
import photo from "../media/photo.png"

function ThoughtOfTheDay() {
  return (
    <section id="thought-of-the-day">
      <img src={photo} alt="Sai Baba" className="sai-photo" />
      <p>Whether your desires are fulfilled or not, think that all that happens is for your good. When you encounter difficulties, always think that better days are ahead. Good and bad always go together. Therefore, take both of them with the same attitude. </p>
    </section>
  );
}

export default ThoughtOfTheDay;
