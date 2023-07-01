// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDtls} = props
  const updatedList = {
    competingTeam: latestMatchDtls.competing_team,
    date: latestMatchDtls.date,
    competingTeamLogo: latestMatchDtls.competing_team_logo,
    venue: latestMatchDtls.venue,
    result: latestMatchDtls.result,
    firstInnings: latestMatchDtls.first_innings,
    secondInnings: latestMatchDtls.second_innings,
    manOfTheMatch: latestMatchDtls.man_of_the_match,
    umpires: latestMatchDtls.umpires,
  }
  const {
    competingTeam,
    date,
    competingTeamLogo,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = updatedList

  return (
    <div className="latest-match-container">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
