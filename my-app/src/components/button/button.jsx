import React from 'react'

export default function button(props) {
  return (
    <div>
        <button 
        onClick={props.onClick}
        type="button" >
            Add node
        </button>
    </div>
  )
}
