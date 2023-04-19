import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import "./nodes.css";
export default function MyComponent(props) {
  const [position, setPosition] = useState({ x: props.x, y: props.y });
  
  
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };
  
  return (
    <Draggable
      handle=".handle"
      defaultPosition={position}
      onDrag={handleDrag}
    >
      <div className="handle"> 
      
      <div key={props.key} className="n-wrapper">

          <div className="n-title">{props.title}</div>
          <div className="n-description">{props.description}</div>
      </div>
      </div>
    </Draggable>
  );
}