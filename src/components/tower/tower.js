import React from 'react';
import './tower.css';
import { TOWER_PX_SIZE } from "../../commons/constants";

const Tower = (props) => (
  <div style={{
    height: `${TOWER_PX_SIZE}px`,
    width: `${TOWER_PX_SIZE}px`,
    backgroundColor: 'red',
    position: "relative",
    top: `${(props.tower.x + 1) * TOWER_PX_SIZE}px`,
    left: `${(props.tower.x + 1) * TOWER_PX_SIZE}px`,
    margin: '1px'
    
  }}>
    
  </div>
)

export default Tower;
