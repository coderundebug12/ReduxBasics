import React , {PropTypes} from 'react'
import Stopwatch from '../components/Stopwatch'
import Stats from './stats'

const Header = (props) => {
    return (
      <div className="header">
        <Stats players={props.players} />
        <h1>Scoreboard</h1>
        <Stopwatch />
      </div>
    );
  }
  
export default Header;
  Header.propTypes = {
    players: React.PropTypes.array.isRequired,
  };
  