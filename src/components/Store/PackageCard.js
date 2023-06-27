import React from "react";

export default function PackageCard(props) {
  return (
    <>
      <div className="Package mx-auto" style={{ width: "fit-content" }}>
        <img className="rounded" src={props.src} alt="" />
        <div className="text-start py-2">
          <div className="font-weight-bold">{props.label}</div> <div className="text-muted">{props.body}</div>
        </div>
      </div>
    </>
  );
}
