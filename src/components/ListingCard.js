import React from "react";
import {useState} from 'react'

function ListingCard({listing, onDelete}) {

const [isFavorited, setIsFavorited]= useState(false)

function handleDeletedItem(){
  fetch (`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
})
.then ((r) => r.json())
.then(()=> onDelete(listing))
}
  return (
    <li className="card">

      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>

      <div className="details">
        {isFavorited ? (
          <button 
          onClick={() => setIsFavorited(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setIsFavorited(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeletedItem} className="emoji-button delete">🗑</button>
      </div>

    </li>
  );
}

export default ListingCard;
