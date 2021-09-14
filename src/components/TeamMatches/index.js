// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
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

    this.setState({blogData: formattedData})
  }

  render() {
    const {blogData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = blogData
    console.log(recentMatches)
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team-banner" />
        <div className="latest-match">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <div>
          <ul>
            {recentMatches.map(eachRecentMatch => (
              <MatchCard
                key={eachRecentMatch.id}
                recentMatch={eachRecentMatch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
