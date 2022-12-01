import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {
  const listingCard = listings.map((listing) => (
    <ListingCard
      listing={listing}
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      onDeleteListing={onDeleteListing}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
