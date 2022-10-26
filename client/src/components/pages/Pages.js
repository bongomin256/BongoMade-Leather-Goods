import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PageStyles } from "../Styles/Pages.styled";

export default function Pages() {
  return (
    <PageStyles>
      <p>
        Pages
        <RiArrowDropDownLine />
      </p>
      <div className="dropdown-content">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </PageStyles>
  );
}
