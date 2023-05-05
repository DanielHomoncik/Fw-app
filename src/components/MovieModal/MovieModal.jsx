import React from "react";

function MovieModal({ id, title, imageUrl, rating, description, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>Rating: {rating}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieModal;
