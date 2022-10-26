import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import data from "../backend/ProductData";
import { ProductStyle } from "../Styles/Products.styled";

function Products() {
  //   const productLists = data;
  return (
    <ProductStyle>
      <p>
        Products
        <RiArrowDropDownLine />
      </p>
      <div className="dropdown-content">
        <Link to="/menwallets">Men's Wallets</Link>

        <Link to="/womenwallets">Women's Wallets</Link>

        <Link to="/totebags">Tote Bags</Link>

        <Link to="/keychains">Keychains</Link>

        <Link to="/customorders">Custom Orders</Link>
      </div>
    </ProductStyle>
  );
}

export default Products;
