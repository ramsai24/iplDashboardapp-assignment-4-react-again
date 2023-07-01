// Write your code here
// import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardListData()
  }

  getTeamCardListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardsList: updatedList, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    console.log(teamCardsList)

    return (
      // <Link to="/">
      <div className="app-container" data-testid="loader">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL Dashboard</h1>
            <ul className="team-cards-container">
              {teamCardsList.map(eachItem => (
                <TeamCard teamCardItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
      // </Link>
    )
  }
}

export default Home
