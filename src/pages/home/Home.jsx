import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import "./home.css"
import SportsList from "../../components/sportsList/SportsList";
import Nav from "../../components/Nav/Nav";
import Sort from "../../components/Sort/Sort";
import imgHome from "../../assets/img/imgHome.png"
import Arrow from "../../assets/img/Group_3.svg"


const Home = () => {
  const {showArrow, setShowArrow} = useContext(mainContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav />
      <main>
        <div className="homeDivH1Image">
          <img src={imgHome} alt='Baseballplayer reaching the Inning' className="homeImage"/>
          <h1>FIND YOUR LEAGUE</h1>
        </div>
        <Sort />
        <SportsList />
        <button onClick={scrollUp} className="arrow" style={{display: showArrow ? "block" : "none"}}><img src={Arrow} alt="red arrow"/></button>
      </main>
    </>
  )
}

export default Home;
