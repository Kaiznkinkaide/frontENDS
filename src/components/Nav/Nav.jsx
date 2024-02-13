import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import logo from "../../assets/img/SPORTOPOLIS-3000.png"
import search from "../../assets/img/search.png"
import "./nav.css"
import { Link } from "react-router-dom";


const Nav = () => {
  const { setSearchTerm } = useContext(mainContext);

  return (
    <header>
      <Link to={'/'}><img src={logo} alt="red arrow" className="imgLogo"/></Link>
      <nav className="search">
        <img src={search} alt="magnifier" />
        <input
        className="searchInput"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
    </header>
  );
};

export default Nav;
