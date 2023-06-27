import React from 'react'

export default function DetailCard(props) {
  return (
    <>
        <div className="row">
            <div className="col-2">
            <div className="mx-auto my-2 text-center">
              <img
                
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
            </div>
            <div className="col-10 text-start my-auto">
                <div className="p text-muted">{props.label}</div>
                <div className="p ">{props.value}</div>
            </div>
            <hr className='mb-1' />
        </div>
    </>
  )
}
