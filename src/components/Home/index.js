// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

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
    this.setState({teamData: formattedData, isLoading: false})
  }

  renderTeamCards = () => {
    const {teamData} = this.state
    return (
      <>
        <div className="dash-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading-app">IPL Dashboard</h1>
        </div>
        <div className="team-cards-container">
          <ul className="cards-list">
            {teamData.map(eachTeamData => (
              <TeamCard eachTeamData={eachTeamData} key={eachTeamData.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamCards()
        )}
      </div>
    )
  }
}
export default Home
