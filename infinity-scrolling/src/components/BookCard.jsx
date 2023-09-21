import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ myData }) => {
  const { title, url, id } = myData;

  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <div className="card-image">
          <p>{id}</p>
          <img src={url} alt={title} />
        </div>
        <h2 style={{ color: "white" }}>{title}</h2>

        {/* Link to the item details page with the item's ID */}
        <Link to={`/item/${id}`}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
