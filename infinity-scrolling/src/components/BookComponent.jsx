import React from "react";
import BookCard from "./BookCard"; // Correct import

const BookComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <BookCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
