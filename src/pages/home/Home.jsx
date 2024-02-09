import { useContext } from "react";
import { mainContext } from "../../context/mainProvider/MainProvider";
import SportsList from "../../components/sportsList/SportsList";
import Nav from "../../components/Nav/Nav";
import Sort from "../../components/Sort/Sort";

const Home = () => {
  const { leagues, setLeagues } = useContext(mainContext);

  return (
    <>
      <Nav />
      <Sort />
      <SportsList />
    </>
  );
};

export default Home;
