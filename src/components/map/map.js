import React from 'react';
import './map.css';
import Tower from "../tower/tower";
const towers = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 1,
  },
  {
    x: 0,
    y: 2,
  },
  {
    x: 0,
    y: 3,
  },
]
const Map = () => (
  <div className='Map'>
    {towers.map(tower => (
      <Tower tower="tower" ></Tower>
    ))}
    
  </div>
)

export default Map;
