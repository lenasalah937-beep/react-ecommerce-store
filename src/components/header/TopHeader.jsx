import React, { useContext } from "react";
import logo from "../../../src/img/logo.png";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext.jsx";
import SearchBox from "./searchBox.jsx";

export default function TopHeader() {
  const { CartItem, favorites } = useContext(cartContext);

  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <SearchBox />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favorites">
              <CiHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{CartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
