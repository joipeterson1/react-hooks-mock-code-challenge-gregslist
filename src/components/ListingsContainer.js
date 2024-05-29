import React from "react";
import ListingCard from "./ListingCard";
import { useEffect, useState } from "react";

function ListingsContainer({search}){
  const [listings, setListings]= useState([])

  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((data) => setListings(data))
  },[])

  function handleDelete(deleted){
    const newListing = listings.filter((listing)=> listing.id !== deleted.id)
    setListings(newListing)
  }

const listSearch= listings.filter((listing)=> {
  return listing.description.toLowerCase().includes(search.toLowerCase()) 
})

  const listCard = listSearch
  .map((listing)=> {
    return(
    <ListingCard 
    key={listing.id} 
    listing={listing} 
    onDelete={handleDelete}
    />
  )})

  return (
    <main>
      <ul className="cards">
      {listCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
