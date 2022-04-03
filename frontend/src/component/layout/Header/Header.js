import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#E45826",
  burgerColorHover: "#FFBC80",
  logo,
  logoWidth: "20vmax",
  navColor1: "#E4FCF9",
  logoHoverSize: "10px",
  logoHoverColor: "#0962EA",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Search",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/search",
  link4Url: "/login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#0962EA",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#0962EA",
  searchIconColorHover: "#0962EA",
  cartIconColorHover: "#0962EA",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
