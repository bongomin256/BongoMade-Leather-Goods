import React from "react";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Pages from "./pages/Pages";
import Shop from "./shop/Shop";
import { HeaderStyled } from "./Styles/Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="logo">
        <h1>BongoMade</h1>
        <h1>Leather Goods</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>Shop</li> */}
          <li>
            <Shop />
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Pages />
          </li>
        </ul>
        <div className="icons">
          <input type="text" name="search" id="search" placeholder="search" />
          <Link to="/login">
            <VscAccount />
          </Link>
          <Link to="/signup">
            <MdShoppingCart />
          </Link>
        </div>
      </nav>
    </HeaderStyled>
  );
}
