import React from 'react';
import './Tricks.css';
import Trick from '../Trick/Trick';


const Tricks = ({tricks}) => {
  
  const trickElements = tricks.map(trick => {
    return <Trick trickData={trick} id={trick.id} key={trick.id}/>
  })

  return (
    <div className='tricks-container'>
      {trickElements}
    </div>
  )
}

export default Tricks;
