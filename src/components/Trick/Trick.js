import React from 'react';
import './Trick.css';

const Trick = ({trickData}) => {
  const {stance, name, obstacle, tutorial, id} = trickData;

  return (
    <div className='trick' id={id}>
      <h2>{name}</h2>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Trick;