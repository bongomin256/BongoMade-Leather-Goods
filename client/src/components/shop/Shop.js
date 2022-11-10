import React from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { data } from "../backend/ProductData";
import { ShopStyles } from "../Styles/Shop.styled";
// import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <ShopStyles>
      <h1> this is Shop</h1>
      {/* {ShopStyles.map((productList) => (
        <div className="card">
          <div>
            <img src={image} alt={name} />
          </div>
        </div>
      ))} */}
    </ShopStyles>
  );
}
