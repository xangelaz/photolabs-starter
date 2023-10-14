import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photoListItem photo-list__item">
      <img className="image photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="profile photo-list__user-profile" src={props.profile}></img>
        <div>
          <h1 className="username photo-list__user-info"> {props.username} </h1>
          <p className="location photo-list__user-info photo-list__user-location"> {props.city}, {props.country} </p>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
