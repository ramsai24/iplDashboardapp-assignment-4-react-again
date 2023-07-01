import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: {}, isLoading: true}

  componentDidMount() {
    this.teamMatchesData()
  }

  teamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedList = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updatedList)

    this.setState({teamMatches: updatedList, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const teamName = params.id
    //  console.log(teamName)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" width={50} height={50} />
          </div>
        ) : (
          <div className={teamName}>
            <img src={teamBannerUrl} alt="team banner" />
            <LatestMatch latestMatchDtls={latestMatchDetails} />
            <ul className="match-cards-List-item-container">
              {recentMatches.map(eachList => (
                <MatchCard matchCardList={eachList} key={eachList.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
