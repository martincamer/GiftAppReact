import React from "react";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img className="image-card" src={url} alt={title} />
      <p className="title__card">{title}</p>
    </div>
  );
};
