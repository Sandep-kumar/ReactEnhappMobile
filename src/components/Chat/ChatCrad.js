import React from 'react'

export default function ChatCrad(props) {

    
  return (
    <>
        <div className="row">
          <div className="col-3" style={{ maxWidth: "fit-content" }}>
            <div className="mx-auto text-center">
              <img
                className="rounded-circle"
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
          </div>
          <div className="col-7 my-auto text-start">
            <div className="h4 mb-0">{props.heading}</div>
            <p className="text-muted ">{props.subHeading}</p>
          </div>
          <div className="col-2">
            <div className="time my-1">{props.time}</div>
            <span className="unread-text py-1 px-2 rounded-circle" style={{backgroundColor:"orange", color:"white"}}>{props.unReadText}</span>
          </div>
          <hr />
        </div>
    </>
  )
}
