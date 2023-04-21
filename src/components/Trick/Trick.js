import React from 'react';
import './Trick.css';

const Trick = ({trickData, deleteTrick}) => {
  const {stance, name, obstacle, tutorial, id} = trickData;

  return (
    <div className='trick' id={id}>
      <h2>{name}</h2>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
      <button onClick={() => deleteTrick(id)}>X</button>
    </div>
  )
}

export default Trick;