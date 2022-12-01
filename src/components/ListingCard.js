import React, { useState } from "react";

function ListingCard({ listing, key, description, image, location, onDeleteListing }) {
  const [isFav, setIsFav] = useState(null);
  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${key}`, {
      method: "DELETE", 
    })
      .then(response => response.json())
      .then(() => onDeleteListing(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick={() => setIsFav(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFav(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
