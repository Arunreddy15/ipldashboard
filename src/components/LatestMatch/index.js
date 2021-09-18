/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    venue,
    date,
    umpires,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    result,
  } = latestMatchDetails
  return (
    <div>
      <h2 className="head">Latest Match</h2>
      <div className="latest-match-container">
        <div className="details-one">
          <div>
            <h1 className="competing-team-name">{competingTeam}</h1>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-logo"
          />
        </div>

        <div className="details-two">
          <hr />
          <label>First Innings</label>
          <p>{firstInnings}</p>
          <label>Second Innings</label>
          <p>{secondInnings}</p>
          <label>Man Of The Match</label>
          <p>{manOfTheMatch}</p>
          <label>Umpires</label>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
