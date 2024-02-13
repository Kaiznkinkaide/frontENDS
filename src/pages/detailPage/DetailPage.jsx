import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mainContext } from '../../context/MainProvider';
import "./detailPage.css"
import Nav from '../../components/Nav/Nav';
import replacement from "../../assets/img/replacement.jpg"

const DetailPage = () => {
  const detailParams = useParams()
  console.log(detailParams);
  const {teams, setTeams} = useContext(mainContext)
  console.log("teams", teams);

  const filteredTeams = teams.filter((team) => team.strTeam == detailParams.teamname)
  console.log("filteredTeams", filteredTeams);

  // Onclick Function für Website
  const openInNewTabWithoutWWW = (url) => {
    window.open(`https://${url}`)
  }

  // Onlick Function für Social Media
  const openInNewTab = (url) => {
    window.open(`https://www.${url}`)
  }

  return (
    <>
      <Nav/>
      <main>
      {filteredTeams
      ?(
        <>
          {filteredTeams?.map((filteredTeam, index) => {
            // console.log("filteredTeam", filteredTeam);
            return(
              <section key={index} className='detailSection'>
                <h2 className='detailH2Title'>{filteredTeam?.strTeam}</h2>
                <div className='detailDivTitle'>
                  <div className='detailDivCountry'>
                    <h3 className='detailH3Country'>{filteredTeam?.strCountry}</h3>
                    <p className='detailPCountry'>Country</p>
                    <h3 className='detailH3Country'>{filteredTeam?.strStadiumLocation}</h3>
                    <p className='detailPCountry'>Location</p>
                    <h3 className='detailH3Country'>{filteredTeam?.intFormedYear}</h3>
                    <p className='detailPCountry'>Established</p>
                    <h3 className='detailH3Country'>{filteredTeam?.strSport}</h3>
                    <p className='detailPCountry'>Sport</p>
                  </div>
                  <img src={filteredTeam?.strStadiumThumb ? filteredTeam?.strStadiumThumb : replacement} alt={filteredTeam?.strTeam} className={filteredTeam?.strStadiumThumb ? 'detailFirstImg' : 'detailFirstImgReplacement'}/>
                </div>
                <div className='detailDivCompetitions'>
                  <p className='detailPCompetitions'>COMPETITIONS</p>
                  <div className='detailDivLinks'>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague2}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague3}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague4}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague5}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague6}</h3></Link>
                    <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague7}</h3></Link>
                  </div>
                </div>
                <div className='detailDivDescription'>
                  <h2 className='detailH2Description'>DESCRIPTION</h2>
                  <div className='detailDivPDescription'>
                    <p className='detailPDescription'>{filteredTeam?.strDescriptionEN}</p>
                  </div>
                </div>
                <img src={filteredTeam?.strTeamBadge} alt={filteredTeam?.strTeam} className='detailLogo'/>
                <h2>STADIUM</h2>
                <div>
                  <p>{filteredTeam?.strStadiumDescription}</p>
                  <div>
                    <h3>{filteredTeam?.strStadium}</h3>
                    <p>Home</p>
                    <h3>{filteredTeam?.intStadiumCapacity}</h3>
                    <p>Capacity</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => openInNewTabWithoutWWW(filteredTeam?.strWebsite)}>WEBSITE</button>
                  <button onClick={() => openInNewTab(filteredTeam?.strTwitter)}>TWITTER</button>
                  <button onClick={() => openInNewTab(filteredTeam?.strInstagram)}>INSTAGRAM</button>
                  <button onClick={() => openInNewTab(filteredTeam?.strYoutube)}>YOUTUBE</button>
                  <button onClick={() => openInNewTab(filteredTeam?.strFacebook)}>FACEBOOK</button>
                </div>
              </section>
            )
          })}
        </>
      )
      : (<p>Loading...</p>)}
      </main>
    </>
  )
}

export default DetailPage