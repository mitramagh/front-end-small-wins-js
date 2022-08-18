import React from 'react';
import smallwins from '../assets/smallwin.png';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <p>SMALL WINS CAN GO A LONG WAY</p>
      <img className="profile-photo" src={smallwins} alt={"Small-Wins"}/>
    </div>
  );
}

export default Home;