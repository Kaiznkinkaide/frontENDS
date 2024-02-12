import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import "./home.css"
import SportsList from "../../components/sportsList/SportsList";
import Nav from "../../components/Nav/Nav";
import Sort from "../../components/Sort/Sort";
import imgHome from "../../assets/img/imgHome.png"


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
        <button onClick={scrollUp} className="arrow" style={{display: showArrow ? "block" : "none"}}><svg
          className="svg"
          width="72"
          height="100%"
          viewBox="0 0 72 102"
          xmlns="http://www.w3.org/2000/svg"
          alt="red arrow"
        >
          <path
            d="M15.7069 27.4451L0 54.9396L10.9306 55.227L21.8611 55.5144V76.0155V96.6124H32.4243H42.9874V76.0155V55.5144L53.4587 55.227L63.93 54.9396L48.4068 28.1157C39.8644 13.4584 32.5161 1.00444 32.1487 0.621239C31.7813 0.23804 24.3412 12.3088 15.7069 27.4451Z"
            id="arrow-fill"
            stroke="rgb(232, 53, 57)"
            strokeWidth="3"
            fill="transparent"
          ></path>

          <mask id="arrow">
            <path
              d="M15.7069 27.4451L0 54.9396L10.9306 55.227L21.8611 55.5144V76.0155V96.6124H32.4243H42.9874V76.0155V55.5144L53.4587 55.227L63.93 54.9396L48.4068 28.1157C39.8644 13.4584 32.5161 1.00444 32.1487 0.621239C31.7813 0.23804 24.3412 12.3088 15.7069 27.4451Z"
              id="arrow-fill"
              fill="#fff"
            ></path>
          </mask>
          <g mask="url('#arrow')">
            <rect
              className="rect"
              width="100%"
              height="100%"
            ></rect>
          </g>
        </svg></button>
      </main>
    </>
  )
}

export default Home;
