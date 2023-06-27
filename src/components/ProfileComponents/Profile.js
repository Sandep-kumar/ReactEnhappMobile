import React from "react";
import TextCard from "./TextCard";

export default function Edit(props) {
  return (
    <>
      <div className="card p-2" style={{border:"none"}}>
        <div className="row">
          <div className="col-4">
            <div className="mx-auto my-2 text-center">
              <img
                className="rounded-circle"
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
          </div>
          <div className="col-3 my-auto text-start px-1">
            <TextCard heading="50" subHeading="Channels" />
          </div>
          <div className="col-3 my-auto text-start px-1">
            <TextCard heading="93.5K" subHeading="Followers" />
          </div>
        </div>
        <div className="detail m-2 text-start">
          <div className="row">
            <div className="col-6">
              <TextCard heading="John Smith" subHeading="janesmith@mail.co" />
            </div>
            <div className="col-6 text-end m-auto">
             <div> <a href="/" style={{textDecoration:"none"}}>Edit</a> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
