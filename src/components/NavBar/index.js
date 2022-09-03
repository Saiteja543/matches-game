import './index.css'

const NavBar = props => {
  const {initialScore, initialTimerSeconds} = props

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-items">
        <li className="score-and-timer-container">
          <p className="display-text-score-and-timer">
            Score: <snap className="text-color">{initialScore}</snap>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="display-text-score-and-timer text-color">
            {initialTimerSeconds} sec
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
