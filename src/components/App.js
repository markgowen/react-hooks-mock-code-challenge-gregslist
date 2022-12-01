import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings)
  }
  
  function handleSearch(query) {
    const filteredListings = listings.filter(listing => {
      return listing.description.toLowerCase().includes(query.toLowerCase())
    })
    setListings(filteredListings);
  }

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
