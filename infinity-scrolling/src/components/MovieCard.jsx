import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MovieDetailsPage } from "./MovieDetailsPage";

const MovieCard = ({ myData }) => {
  // const { title, body, id } = myData;
  const {title,description
,image ,_id }=myData
  // console.log(title)

  const [show,setShow]=useState(false);

  const Moredetails=(title)=>{
    console.log(title)
  }

  return (
    <div className="card">
      <div className="card-info">
        {/* <p className="card-id">{}</p> */}
        <p>{title}</p>
        <h2>{description}</h2>
        <img src={image[0]} alt="" />
        <Link to={{ pathname: `/movie/${_id}`}} ><button>More details</button></Link>
      </div>
    </div>
  );
};

export default MovieCard;
