import React from "react";

export default function TextCard(props) {
  return (
    <>
      <span>
        <div className="h3 m-0">{props.heading}</div>
        <div className="p muted-text">{props.subHeading}</div>
      </span>
    </>
  );
}
