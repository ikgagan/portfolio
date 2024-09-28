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
          {/* Indukala Krishna Murthy */}
          </h1>
        <h2>
          <span>Software Developer</span>
        </h2>
        <p style={{marginTop:"7px", marginBottom:"15px" }}>
        I’m a Software Developer with 3 years of experience and a Master’s in Computer Science.<br/>
        I specialize in full stack development, data analytics, and microservices architecture, delivering<br/>
        scalable platforms and AI-integrated tools using technologies like React Js, Django, Flask, Angular, <br/>
        Next Js. My work spans dynamic data platforms, user-friendly interfaces, and AI-driven <br/>
        analytics, enhancing performance and user experience across diverse industries.
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