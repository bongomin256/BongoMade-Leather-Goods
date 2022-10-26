import React from "react";
import { Link } from "react-router-dom";
import { FooterStyles } from "./Styles/Footer.styled";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterStyles>
      <div className="upper-container">
        <div className="company">
          <div className="co-header">
            <h1>BongoMade</h1>
            <h1>Leather Goods</h1>
          </div>
          <ul>
            <li>Seattle, WA</li>
            <li>+1 205 4242 232</li>
            <li>info@bongomadeleathergoods.com</li>
          </ul>
          <ul id="social-links">
            <li>
              <a
                href="https://www.instagram.com/bongosleathergoods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bongosleather/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="faq">
          <div className="faq-header">
            <h1>FAQs</h1>
          </div>
          <ul>
            <li>
              <Link to="#">Gift Cards</Link>
            </li>
            <li>
              <Link to="#">Payment</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="info">
          <h1 className="info-header">INFORMATION</h1>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>{" "}
            <li>
              <Link to="#">My Account</Link>
            </li>{" "}
            <li>
              <Link to="#">Contact</Link>
            </li>{" "}
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>{" "}
            <li>
              <Link to="#">Return & Exchange</Link>
            </li>{" "}
            <li>
              <Link to="#">Shipping & Delivery</Link>
            </li>{" "}
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="news-letter">
          <h1>NEWSLETTER</h1>
          <div className="news-content">
            <div className="news-child">
              <p>
                Be the first to know about our new product, sales and promotions
              </p>
            </div>

            <div className="news-child">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="news-child">
              <span>
                By subscribing, you accept the{" "}
                <Link to="/privacy">Privacy Policy</Link>
              </span>
            </div>

            <div className="news-child">
              <input type="submit" value="subscribe" className="submit" />
            </div>
          </div>
        </div>
      </div>

      <ul className="middle-container">
        <li>
          | <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        |
      </ul>
      <div className="copyright">
        <p>
          <AiOutlineCopyrightCircle />
          2022 BongoMade Leather Goods , ALL RIGHTS RESERVED
        </p>
      </div>
    </FooterStyles>
  );
}
