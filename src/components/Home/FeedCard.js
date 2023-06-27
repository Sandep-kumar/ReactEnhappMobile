import React from "react";

export default function FeedCard(props) {
  return (
    <>
      <div className="card m-auto py-2 px-3 shadow">
        <div className="row my-2">
          <div
            className="col-2 mx-auto my-auto"
            style={{ maxWidth: "fit-content" }}
          >
            <div className="  text-center">
              <img
                className="rounded-circle"
                style={{ maxWidth: "100%" }}
                src={props.UserImage}
                alt=""
              />
            </div>
          </div>
          <div className="col-8 my-auto text-start">
            <div className="p mb-0">{props.heading}</div>
            <p className="text-muted m-0">{props.subHeading}</p>
          </div>
          <div className="col-2 my-auto">
            <div className="ellipsis">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="body text-start">
          <div className="story-heading h4">{props.storyHeading}</div>
          <div className="story">{props.story}</div>
          <div className="img text-center m-3">
            <img className="rounded" style={{width:"fit-content"}} src={props.feedImage} alt="" />
          </div>
          <hr />
          <div className="chat px-2">
            <div className="row">
              <div className="col-1"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
              <div className="col-1"><i className="fa fa-comment-o" aria-hidden="true"></i></div>
             
              <div className="col-10 text-end px-0"> <li className="inline" style={{display:"inline"}}>{props.likes}</li> <li className="inline" style={{display:"inline"}}>{props.comments}s</li></div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
