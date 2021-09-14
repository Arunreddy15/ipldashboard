// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getDataTeams()
  }

  getDataTeams = async () => {
    const apiUrl = 'https://apis.ccbp.in/ipl'
    const options = {method: 'GET'}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: formattedData})
  }

  render() {
    const {teamData} = this.state
    return (
      <div className="home-container">
        <h1 className="heading-app">IPL Dashboard</h1>
        <div className="team-cards-container">
          <ul className="cards-list">
            {teamData.map(eachTeamData => (
              <TeamCard eachTeamData={eachTeamData} key={eachTeamData.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
