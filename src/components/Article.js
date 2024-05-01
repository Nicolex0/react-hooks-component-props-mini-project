import React from "react";

function Article({ title, date, preview }) {
  const minutesToRead = date ? Math.ceil(date.minutes / 5) : 0; // Calculate minutes to read based on date

  // Function to generate emojis based on minutes to read
  const generateEmojis = (count, emoji) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index}>{emoji}</span>
    ));
  };

  // Function to get appropriate emoji based on minutes
  const getEmojis = () => {
    if (minutesToRead < 6) {
      return generateEmojis(minutesToRead, "☕️");
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      return generateEmojis(bentoBoxes, "🍱");
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{getEmojis()} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
