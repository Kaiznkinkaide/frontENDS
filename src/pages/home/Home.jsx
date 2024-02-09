import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import "./home.css"
import SportsList from "../../components/sportsList/SportsList";
import Nav from "../../components/Nav/Nav";
import Sort from "../../components/Sort/Sort";
import imgHome from "../../assets/img/imgHome.png"

const Home = () => {
  const { leagues, setLeagues } = useContext(mainContext);

  return (
    <>
      <Nav />
      <main>
        <div>
          <h1>FIND YOUR LEAGUE</h1>
          <img src={imgHome} alt='Baseballplayer reaching the Inning' />
        </div>
        <Sort />
        <SportsList />
      </main>
    </>
  );
};

export default Home;
