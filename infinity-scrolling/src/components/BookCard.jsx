import React from "react";

const BookCard = ({ myData }) => {
  const { title, author, image } = myData;
  return (
    <div className="card">
    <div className="card-info">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <p style={{color:"white"}}>{author.substr(0, 150)}</p>
      <h2 style={{color:"white"}}>{title.substr(0, 15)}</h2>
    </div>
  </div>
  
  );
};

export default BookCard;
