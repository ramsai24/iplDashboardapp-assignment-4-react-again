// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardItem} = props
  console.log(teamCardItem)
  const {id, name, teamImageUrl} = teamCardItem

  return (
    <Link to={`/ipl/${id}`}>
      <li className="team-card-item">
        <img className="team-banner-img" src={teamImageUrl} alt="team banner" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
