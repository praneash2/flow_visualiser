import React from 'react'
import './nodes.css';
export default function nodes(props) {
  return (
    <div className="n-wrapper">
        <div className="n-title">{props.title}</div>
        <div className="n-description">{props.description}</div>
    </div>

  )
}
