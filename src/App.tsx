import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from "react-helmet";
import './App.css';
import './types/global.d.ts';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import photo_of_toby from './img/Photo of Me.jpg';
import cv from './cv.pdf';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bh_1 from './img/Beat Hero 1.png';
import bh_2 from './img/Beat Hero 2.png';
import bh_3 from './img/Beat Hero 3.png';
import mpr_1 from './img/Missing Persons Report 1.png';
import mpr_2 from './img/Missing Persons Report 2.png';
import mpr_3 from './img/Missing Persons Report 3.png';
import unity from './img/Unity.png';
//Email
import MailOutlineIcon from '@mui/icons-material/MailOutline';
//Read more
import ArticleIcon from '@mui/icons-material/Article';

function App() {
  return (
  <div className="App">
  <html lang="en">
    <Helmet>
      <title>Toby Morgan's Portfolio</title>
      <meta name="author" content="Toby Morgan"/>
      <meta name="description" content="Portfolio and CV"/>
    </Helmet>
    <body>
      <header>
        <h1>Toby Morgan's Portfolio & CV</h1>
        <h2>Welcome to my portfolio!</h2>
      </header>
      <div>
        <p>
          <img src={photo_of_toby} alt="Photo of Toby" width="280" height="310" style={{ paddingRight: 20 }}/>
          <h3>About me</h3>
          I'm from: West Coast of New Zealand.
          <br/>
          I live: I moved to Christchurch to attend the University of Canterbury.
          <br/>
          I studied: BSc, majoring in Computer Science.
          <br/>
          Favourite fields: Cryptography and automata, but I also enjoy many other fields such as software engineering, discrete mathematics and game design.
          <br/>
          Employment: I am very passionate about learning and getting experience in all fields of computer science.
          The ideal job for me would be focused on programming as I love to code, but also offer a broad range of other tasks to keep me challenged and open up the options possible for what roles I can take.
          <br/>
          At the bottom is a form to send me an email. Below are links to download my CV, find the source code for this website on my GitHub, and previews of projects that I've made.
        <br/>
        <Tooltip title="Download my CV">
          <IconButton>
            <a href={cv} download="Toby Morgan - CV 2023">
            <PictureAsPdfIcon fontSize="large"/>
            </a>
          </IconButton>
        </Tooltip>
        <Tooltip title="YouTube">
          <IconButton>
            <a href="https://www.youtube.com/@tobymorgan6263/featured" target="_blank" rel="noreferrer">
            <YouTubeIcon fontSize="large"/>
            </a>
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton>
            <a href="https://github.com/CrazyMorgan0/CrazyMorgan0.github.io" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large"/>
            </a>
          </IconButton>
        </Tooltip>
        </p>
      </div>
      <div>
        <br/>
        <p>
        <h3>Games</h3>
          My passion for computers came from playing video games.
          I wanted to learn the magic behind how video games and websites were made, and how computers use machinery, electricity and programs to make that happen.
          These are games that I have developed solo for VR, using the Unity game engine.
        </p>
        <p>
          <strong>Beat Hero</strong>
          <br/>
          <Carousel width="60%" showArrows={true} showThumbs={false}>
            <div>
              <img src={bh_1} alt="Gameplay"/>
            </div>
            <div>
              <img src={bh_2} alt="Double points mode"/>
            </div>
            <div>
              <img src={bh_3} alt="Beat Hero menu"/>
            </div>
          </Carousel>
          <div className="game_card">
            <Tooltip title="Source code">
              <IconButton>
                <a href="" target="_blank" rel="noreferrer">
                <GitHubIcon/>
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Watch trailer">
              <IconButton>
                <a href="" target="_blank" rel="noreferrer">
                <YouTubeIcon/>
                </a>
              </IconButton>
            </Tooltip>
            <br/>
            Genre: A fun rhythm game designed for fitness
            <br/>
            Gameplay:
            <ul>
              <li>Slashing the same beat multiple times, encouraging players to slice as many times as they can while it's in range</li>
              <li>Players are encouraged to crouch to avoid losing points</li>
              <li>Pontential for infinite songs with a competitive scoring system.</li>
            </ul>
          </div>
        </p>
        <p>
          <strong>Missing Persons Report</strong>
          <br/>
          <Carousel width="60%" showArrows={true} showThumbs={false}>
            <div>
              <img src={mpr_1} alt="Kate in the basement"/>
            </div>
            <div>
              <img src={mpr_2} alt="Craft knife handle in the bathroom"/>
            </div>
            <div>
              <img src={mpr_3} alt="Basement door"/>
            </div>
          </Carousel>
          <div className="game_card">
            <Tooltip title="Source code">
              <IconButton>
                <a href="" target="_blank" rel="noreferrer">
                <GitHubIcon/>
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Watch trailer">
              <IconButton>
                <a href="https://youtu.be/J3PRJnp28-c" target="_blank" rel="noreferrer">
                <YouTubeIcon/>
                </a>
              </IconButton>
            </Tooltip>
            <br/>
            Genre: Interactive narrative experience
            <br/>
            Gameplay:
            <ul>
              <li>Play as the police in an investigation about a missing woman.</li>
              <li>Search the rooms for items and evidence.</li>
              <li>Interesting and quick thriller story designed to be a prototype scene for a police themed game.</li>
            </ul>
          </div>
        </p>
      </div>
      <div>
        <p>
        <img src={unity} alt="Made with unity" width="100" height="35"/>
        <br/>
          <h3>Future Plans</h3>
          I would like to expand my portfolio by producing more games in my spare time, VR is great and there are many other types and genres of games that I enjoy, such as story, stealth and 2D.
          Unity makes game development simple so I would use it for personal projects.
          I would also like to expand my portfolio as a web developer by practicing frontend and backend development.
        </p>
      </div>
    </body>
    <footer>
      <div>
        <form method="POST" action="mailto:crazymorgan0@gmail.com">
        <table>
        <thead>
            <tr>
                <th>Fill the form below to send me an email:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Your name: <input type="text" id="clientName"/></td>
            </tr>
            <tr>
                <td>Your business: <input type="text" id="clientBusiness"/></td>
            </tr>
            <tr>
                <td>Contact email: <input type="email" id="clientEmail" value="example@email.com"/></td>
            </tr>
            <tr>
                <td>Contact phone (optional): <input type="tel" id="clientPhone"/></td>
            </tr>
            <tr>
                <td>Message: <textarea id="Message" rows={5}/></td>
            </tr>
            <tr>
              <td>Send referees <input type="checkbox" id="referees"/></td>
            </tr>
            <tr>
              <td>Send transcript <input type="checkbox" id="transcript"/></td>
            </tr>
            <tr>
              <td><input type="submit" value="Send"/></td>
            </tr>
        </tbody>
        </table>
        </form>
      </div>
    </footer>
  </html>
  </div>
  );
}

export default App;