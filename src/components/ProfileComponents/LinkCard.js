import React from "react";

export default function LinkCard(props) {
  return (
    <>
    <a href="/" style={{textDecoration:"none",color:"inherit"}}>
      <div className="row">
        <div className="col-2">
          <div className="mx-auto my-2 text-center">
            <img style={{ maxWidth: "100%" }} src={props.src} alt="" />
          </div>
        </div>
        <div className="col-8 text-start my-auto">
          <div className="p ">{props.label}</div>
        </div>
        <div className="col-2 text-start my-auto"> <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
        <hr className="mb-1"/>
      </div>
      </a>
    </>
  );
}
