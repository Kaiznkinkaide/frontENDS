import React, { useContext } from "react";
import { mainContext } from "../../context/mainProvider/MainProvider";

const Nav = () => {
  const { setSearchTerm } = useContext(mainContext);

  return (
    <nav>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Nav;
