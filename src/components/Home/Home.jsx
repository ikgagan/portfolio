import React from 'react';
import gaganResume from './resume.pdf'
import gaganPhoto from './gaganPhoto1.jpg'
import './home.css'

const Home = (props) => {
  return (
    <header>
    <div id= "home" class="container">
    </div>
    <div class="hero flex items-centre justify-between">
      <div class="left flex-2 justify-center">
        <img src={gaganPhoto} />
      </div>
      <div class="right flex-1">
        <h1>Hello, I am Gagan <br/>
          Indukala Krishna Murthy</h1>
        <h2>
          <span>Web Developer/Software Developer</span>
        </h2>
        <p style={{marginTop:"7px", marginBottom:"15px" }}>
          I am a Masters Graduate Student at New Jersey Institute of Technology - Newark, New Jersey, US.
        </p>
        <div>
            <a
              href={gaganResume}
              download="Gagan's Resume"
              target="_blank"
              rel="noopener noreferrer"
              >
                <button class="btn btn-secondary">DOWNLOAD Resume</button>
            </a>    
        </div>
      </div>
    </div>
  </header>
  );
};

export default Home;