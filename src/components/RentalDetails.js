import React from "react";
import "./style.css";

function RentalDetails({ data }) {
  return (
    <div className="view">
      <img src={data.imgSrc} alt={data.imgSrc}></img>
      {data.isPopular && <span className="rectangle">Popular</span>}
      <div className="view_price_tag">
        <span className="sold_price">{data.price}</span>{" "}
        <span className="price_month">/month</span>
      </div>
      <h2>{data.info6String}</h2>
      <p>{data.addressStreet}</p>
      <div className="meta_details">
        <i className="fa-solid fa-bed"></i>
        {data.beds} Beds
        <i className="fa-solid fa-bath"></i>
        {data.baths} Bathrooms
        <i className="fa-solid fa-chart-area"></i>
        {data.area} Area
      </div>
    </div>
  );
}

export default RentalDetails;
