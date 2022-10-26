import React from "react";
import data from "./backend/ProductData";
import { ProductStyle } from "./Styles/Products.styled";

export function Products() {
  //   const productLists = data;
  return (
    <ProductStyle>
      {/* {ProductStyle.map((data) => (
        <div className="card">
          <div>
            <img src={productLists.image} alt={productLists.name} />
          </div>
        </div>
      ))} */}
    </ProductStyle>
  );
}
