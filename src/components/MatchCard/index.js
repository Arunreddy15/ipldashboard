// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatches
  const status = matchStatus === 'Won'
  const colorStatus = status ? 'green' : 'red'

  return (
    <li className="card-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-logo"
      />
      <h2>{competingTeam}</h2>
      <p className="result">{result}</p>
      <p className={colorStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
