// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamData} = props
  const {id, name, teamImageUrl} = eachTeamData
  return (
    <Link to={`/ipl/${id}`}>
      <li className="single-team-card">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
