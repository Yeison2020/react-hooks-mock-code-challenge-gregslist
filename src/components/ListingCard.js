import React, { useState } from "react";

function ListingCard({ location, description, image, id, returnId }) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        <button
          className="emoji-button favorite active"
          onClick={handleFavorite}
        >
          {favorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => returnId(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
