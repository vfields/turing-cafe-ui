import React from 'react';
import './ResContainer.css';
import ResCard from '../ResCard/ResCard.js';

function ResContainer({reservations}) {
  const resList = reservations.map(reservation => {
    return (
      <ResCard
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })
  return (
    <section>
      <p>I am ResContainer</p>
      {resList}
    </section>
  )
}

export default ResContainer;
