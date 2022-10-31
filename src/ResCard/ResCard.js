import React from 'react';
import './ResCard.css';

function ResCard({id, name, date, number, time}) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default ResCard;
