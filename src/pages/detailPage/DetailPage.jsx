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
            console.log("filteredTeam", filteredTeam);
            return(
              <section key={index}>
                <div>
                  <h2>{filteredTeam?.strTeam}</h2>
                  <img src={filteredTeam?.strStadiumThumb ? filteredTeam?.strStadiumThumb : replacement} alt={filteredTeam?.strTeam} className='detailFirstImg'/>
                </div>
                <div>
                  <h3>{filteredTeam?.strCountry}</h3>
                  <p>Country</p>
                  <h3>{filteredTeam?.strStadiumLocation}</h3>
                  <p>Location</p>
                  <h3>{filteredTeam?.intFormedYear}</h3>
                  <p>Established</p>
                  <h3>{filteredTeam?.strSport}</h3>
                  <p>Sport</p>
                </div>
                <div>
                  <p>COMPETITIONS</p>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague2}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague3}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague4}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague5}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague6}</h3></Link>
                  <Link to={`/${filteredTeam?.strLeague}`} className="detailLinkLeagues"><h3 className='detailH3Leagues'>{filteredTeam?.strLeague7}</h3></Link>
                </div>
                <div>
                  <h2>DESCRIPTION</h2>
                  <p>{filteredTeam?.strDescriptionEN}</p>
                </div>
                <img src={filteredTeam?.strTeamBadge} alt="" />
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