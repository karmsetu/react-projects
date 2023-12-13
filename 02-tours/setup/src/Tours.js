import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours, anyTour, fetchTours}) => {
  const toursElem = tours.map(eachTour => <Tour key={eachTour.id} {...eachTour} removeTours={removeTours} />)
  return (
  <section>
    <div className='title'>
      {!anyTour ? <> <h2>No Tours left</h2> <button className='btn' onClick={()=> fetchTours()}>refresh</button> </> : <h2>Our Tours</h2>}
      
      <div className='underline'></div>
    </div>
    <div>
      {toursElem}
    </div>
  </section>
);
};

export default Tours;
