import React from 'react'
import { useLocation } from 'react-router-dom';

const Details = () => {

    let data=useLocation()
    console.log(data.state);
  return (
    <div className="card" >
    <img style={{width:'200px'}} className="card-img" src={data.state.characterImageFull} alt="Character Image" />
    <div className="card-body">
      <h3 className="card-title">{data.state.actorName}</h3>
      <p className="card-text">Character Name: {data.state.characterName}</p>
      <p className="card-text">Parents Name: {data.state.parents?.toString()}</p>
      <p className="card-text">Siblings Name: {data.state.siblings?.toString()}</p>
      <p className="card-text">Partner Name: {data.state.marriedEngaged?.toString()}</p>
      <p className="card-text">Children Name: {data.state.parentOf?.toString()}</p>
    </div>
  </div>

  )
}

export default Details