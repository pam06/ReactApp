import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <h2 className="name">{props.id}. {props.name}</h2>
      </div>
    </div>
  );
}

export default Card;
