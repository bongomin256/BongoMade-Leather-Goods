import React from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { ShopStyles } from "../Styles/Shop.styled";
// import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <ShopStyles>
      {/* {ProductStyle.map((data) => (
        <div className="card">
          <div>
            <img src={productLists.image} alt={productLists.name} />
          </div>
        </div>
      ))} */}
      {/* <p>
        Shop
        <RiArrowDropDownLine />
      </p>
      <div className="dropdown-content">
        <Link to="/menwallets">Men's Wallets</Link>

        <Link to="/womenwallets">Women's Wallets</Link>

        <Link to="/totebags">Tote Bags</Link>

        <Link to="/keychains">Keychains</Link>

        <Link to="/customorders">Custom Orders</Link>
      </div> */}
    </ShopStyles>
  );
}
