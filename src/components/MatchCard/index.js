// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardList} = props

  const updatedList = {
    competingTeam: matchCardList.competing_team,
    competingTeamLogo: matchCardList.competing_team_logo,
    result: matchCardList.result,
    matchStatus: matchCardList.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedList

  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>{' '}
    </li>
  )
}

export default MatchCard
