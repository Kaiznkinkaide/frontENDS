import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import arrow from "../../assets/img/arrow.png"
import search from "../../assets/img/search.png"
import "./nav.css"


const Nav = () => {
  const { setSearchTerm } = useContext(mainContext);

  return (
    <header>
      <div className="navDivLogo">
        <img src={arrow} alt="red arrow" />
        <p className="logo">SPORTOPOLIS 3000</p>
      </div>
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
