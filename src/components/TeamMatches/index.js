// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {blogData: [], isLoading: true, id: ''}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({id})

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        id: data.latest_match_details.id,
        venue: data.latest_match_details.venue,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        umpires: each.umpires,
        result: each.result,
        id: each.id,
        venue: each.venue,
        manOfTheMatch: each.man_of_the_match,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({blogData: formattedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {blogData} = this.state
    console.log(blogData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = blogData

    return (
      <div className="team-matches-container-data ">
        <img src={teamBannerUrl} alt="team-banner" className="banner" />
        <div className="latest-match">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <div>
          <ul className="match-cards-down">
            {recentMatches.map(each => (
              <MatchCard key={each.id} recentMatches={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, id} = this.state
    const team = `team-matches-container ${id}`
    return (
      <div className={team}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
