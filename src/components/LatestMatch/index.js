// Write your code here
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
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} />
      <div>
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
