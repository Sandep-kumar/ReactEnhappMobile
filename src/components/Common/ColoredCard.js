import React from 'react'

export default function ColoredCard(props) {
  return (
    <>
    <div className="card p-2">
        <div className="h5">{props.value}</div>
        <div className="p">{props.text}</div>
    </div>
    
    </>
  )
}
