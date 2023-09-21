import React from "react";

const ItemDetailsPage = ({ match, movieInfo }) => {
  const itemId = match.params.id;

  // Find the item with the matching ID from the movieInfo array
  const selectedItem = movieInfo.find((item) => item.id === Number(itemId));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { title, url, id } = selectedItem;

  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <div className="card-image">
          <p>{id}</p>
          <img src={url} alt={title} />
        </div>
        <h2 style={{ color: "white" }}>{title}</h2>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
