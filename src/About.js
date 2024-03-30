
import React, {useState, useEffect, useRef} from "react";
import './About.css';
import Logo from "./Logo";
import Portfolio from "./Portfolio";
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const About = () => {
  const [health, setHealth] = useState(1000);
  const [gameStarted, setGameStarted] = useState(false);
  const gameContainerRef = useRef(null);
  const [won, setWon] = useState(false); // State to track win status
  const [winMessageShown, setWinMessageShown] = useState(false); // State to track if win message is shown
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [activeLasers, setActiveLasers] = useState([]);
  const [activeSpaceship, setActiveSpaceship] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  //const spaceship = document.getElementById('spaceship');
  const gameContainer = gameContainerRef.current;
  const spaceshipRef = useRef(null);
  const spaceship = spaceshipRef.current;
  


  const startGame = () => {
    setGameStarted(true);
    setWon(false);
    setWinMessageShown(false);
    setGameOver(false);

    // Reset health
    setHealth(1000);
    
    const destroyButton = document.getElementById('destroy-button');
    destroyButton.style.display = 'none';

    // Remove all active laser beams from the screen
    activeLasers.forEach((activeLaser) => {
      if (gameContainer.contains(activeLaser)) {
        gameContainer.removeChild(activeLaser);
      }
    });
     // Remove event listeners to prevent duplicate listeners
    document.removeEventListener('mousemove', moveSpaceship);
    document.removeEventListener('click', shootLaser);

    // Add event listeners again
    document.addEventListener('mousemove', moveSpaceship);
    document.addEventListener('click', shootLaser);
  };

  const moveSpaceship = (event) => {
    if (spaceship) {
      spaceship.style.display = 'block';
      const posX = event.clientX - spaceship.clientWidth / 20;
      spaceship.style.left = `${posX}px`;
    }
  };

  const shootLaser = () => {
    if (!spaceship || won) return;
  
    const laser = document.createElement('div');
    laser.className = 'laser';
    laser.style.width = '55px';
    laser.style.height = '55px';
    laser.style.backgroundColor = 'green';
    const spaceshipLeft = spaceship.offsetLeft;
    if (spaceshipLeft !== undefined) {
      laser.style.left = `${spaceshipLeft + spaceship.offsetWidth / 20 - laser.offsetWidth / 2}px`;
    }
    const laserTop = spaceship.offsetTop - laser.offsetHeight;
    laser.style.top = `${laserTop}px`;
    animateLaser(laser);
    gameContainer.appendChild(laser);
    setActiveLasers((prevLasers) => [...prevLasers, laser]);
  };

  const animateLaser = (laser) => {
    // Animate laser beam
    const interval = setInterval(() => {
      // Move laser upwards
      laser.style.top = `${parseInt(laser.style.top) - 10}px`;
      // Check for collision with text elements
      checkCollision(laser);
      //Log the values of win conditions for debugging
      //console.log("won:", won, "winMessageShown:", winMessageShown, "gameOver:", gameOver);
      // Remove laser when it reaches the top of the screen
      if ((parseInt(laser.style.top) < 0 )|| won || winMessageShown || gameOver) {
        clearInterval(interval);
        if (gameContainer.contains(laser)) {
          gameContainer.removeChild(laser);
        }
        // Remove the laser from the list of active lasers
        setActiveLasers((prevLasers) => prevLasers.filter((activeLaser) => activeLaser !== laser));
  
      }
    }, 20);
  };

  const checkCollision = (laser) => {
    const textElements = document.querySelectorAll('.n');
    let allLettersHidden = true;
    textElements.forEach((textElement) => {
      if (isColliding(laser, textElement)) {
        textElement.style.visibility = 'hidden';
      }
      if (textElement.style.visibility !== 'hidden') {
        allLettersHidden = false;
      }
    });
    checkWinCondition(allLettersHidden);
  };

  const checkWinCondition = (allLettersHidden) => {
    //const playButton = document.querySelectorAll('play-again-button');
    if (allLettersHidden && !winMessageShown) {
      setWon(true);
      console.log(allLettersHidden)
      setWinMessageShown(true);
      setShowWinMessage(true);
      //alert('You won!');
      document.getElementById('destroy-button').innerText = 'Play Again';
      allLettersHidden = false;
      //playButton.zIndex = '2600';
      setActiveLasers([]);
      // Remove all ships
      spaceship.style.display = 'none';
      document.getElementById("destroy-button").style.zIndex = "5000";
      

    }
  };

  const isColliding = (laser, element) => {
    const laserRect = laser.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return (
      laserRect.top < elementRect.bottom &&
      laserRect.bottom > elementRect.top &&
      laserRect.left < elementRect.right &&
      laserRect.right > elementRect.left
    );
  };

  const removeLaser = (laser) => {
    if (gameContainer.contains(laser)) {
      gameContainer.removeChild(laser);
    }
    setActiveLasers((prevLasers) => prevLasers.filter((activeLaser) => activeLaser !== laser));
  };

  useEffect(() => {
    if (gameStarted && !won) {
      
      document.addEventListener('mousemove', moveSpaceship);
      document.addEventListener('click', shootLaser);

      return () => {
        document.removeEventListener('mousemove', moveSpaceship);
        document.removeEventListener('click', shootLaser);
      };
    }
  }, [gameStarted, won, winMessageShown]); // Only dependencies needed

  const restartGame = () => {
    const textElements = document.querySelectorAll('.n');
    textElements.forEach((textElement) => {
        textElement.style.visibility = 'visible';
    });
    startGame();
};
  



    return (
        
    <div >
    
    <main id="page-content" data--touch-swipe="[object Object]" >
      <section className="current" >
        <div >
          <div className="page-control">
            <a href="/portfolio" title="Web Development Portfolio" className="next" element={<Portfolio/>}>
              <span>
                <Link to='/portfolio'>Portfolio</Link>
              </span>
              <em></em>
            </a>
            <div className="ribbon">
              <a target="" href="https://github.com/warrengslice" title="@warrengslice">FOLLOW ON GITHUB</a>
            </div>
          </div>
          <div className="about-container" >
              
              <div className="content game-container" id="about" 
              data-stage="94b575e9dd849bc834bf0c2f808fc2391bcc8b93f459eab0dc89e98ca6dedced" 
              itemScope="" itemType="http://schema.org/WebSite"
              ref={gameContainerRef}>
                
                <div className="game-lettering visible">
                  <h3>
                    <span>
                      <span className="n">H</span>
                      <span className="n">e</span>
                      <span className="n">l</span>
                      <span className="n">l</span>
                      <span className="n">o</span>
                      <span className="n">,</span>
                      <span className="n"> </span>
                      <span className="n">m</span>
                      <span className="n">y</span>
                      <span className="n"> </span>
                      <span className="n">n</span>
                      <span className="n">a</span>
                      <span className="n">m</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                      <span className="n">i</span>
                      <span className="n">s</span>
                      <span className="n"> </span>
                    </span>
                    <strong>
                      <span className="n">W</span>
                      <span className="n">a</span>
                      <span className="n">r</span>
                      <span className="n">r</span>
                      <span className="n">e</span>
                      <span className="n">n</span>
                      <span className="n"> </span>
                      <span className="n">P</span>
                      <span className="n">e</span>
                      <span className="n">t</span>
                      <span className="n">e</span>
                      <span className="n">r</span>
                      <span className="n">s</span>
                      <span className="n">o</span>
                      <span className="n">n</span>
                    </strong>
                    <span>
                      <span className="n">.</span>
                    </span>
                  </h3>
                  <h1>
                    <span>
                      <span className="n">I</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">m</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n"> </span>
                    </span>
                    <span itemProp="specialty">
                      <span className="n">f</span>
                      <span className="n">u</span>
                      <span className="n">l</span>
                      <span className="n">l</span>
                      <span className="n">-</span>
                      <span className="n">s</span>
                      <span className="n">t</span>
                      <span className="n">a</span>
                      <span className="n">c</span>
                      <span className="n">k</span>
                      <span className="n"> </span>
                      <span className="n">w</span>
                      <span className="n">e</span>
                      <span className="n">b</span>
                      <span className="n"> </span>
                      <span className="n">d</span>
                      <span className="n">e</span>
                      <span className="n">v</span>
                      <span className="n">e</span>
                      <span className="n">l</span>
                      <span className="n">o</span>
                      <span className="n">p</span>
                      <span className="n">e</span>
                      <span className="n">r</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">n</span>
                      <span className="n">d</span>
                      <span className="n"> </span>
                      <span className="n">U</span>
                      <span className="n">I</span>
                      <span className="n">/</span>
                      <span className="n">U</span>
                      <span className="n">X</span>
                      <span className="n"> </span>
                      <span className="n">j</span>
                      <span className="n">a</span>
                      <span className="n">v</span>
                      <span className="n">a</span>
                      <span className="n">s</span>
                      <span className="n">c</span>
                      <span className="n">r</span>
                      <span className="n">i</span>
                      <span className="n">p</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">s</span>
                      <span className="n">p</span>
                      <span className="n">e</span>
                      <span className="n">c</span>
                      <span className="n">i</span>
                      <span className="n">a</span>
                      <span className="n">l</span>
                      <span className="n">i</span>
                      <span className="n">s</span>
                      <span className="n">t</span>
                      <span className="n">.</span>
                    </span>
                  </h1>
                  <h2>
                    <span>
                      <span className="n">C</span>
                      <span className="n">h</span>
                      <span className="n">e</span>
                      <span className="n">c</span>
                      <span className="n">k</span>
                      <span className="n"> </span>
                      <span className="n">o</span>
                      <span className="n">u</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">m</span>
                      <span className="n">y</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">r</span>
                      <span className="n">t</span>
                      <span className="n">i</span>
                      <span className="n">c</span>
                      <span className="n">l</span>
                      <span className="n">e</span>
                      <span className="n">s</span>
                      <span className="n">,</span>
                      <span className="n"> </span>
                      <span className="n">R</span>
                      <span className="n">e</span>
                      <span className="n">a</span>
                      <span className="n">c</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">n</span>
                      <span className="n">d</span>
                      
                      <span className="n"> </span>
                      <span className="n">R</span>
                      <span className="n">e</span>
                      <span className="n">a</span>
                      <span className="n">c</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">N</span>
                      <span className="n">a</span>
                      <span className="n">t</span>
                      <span className="n">i</span>
                      <span className="n">v</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                      <span className="n">U</span>
                      <span className="n">I</span>
                      <span className="n"> </span>
                      <span className="n">c</span>
                      <span className="n">o</span>
                      <span className="n">m</span>
                      <span className="n">p</span>
                      <span className="n">o</span>
                      <span className="n">n</span>
                      <span className="n">e</span>
                      <span className="n">n</span>
                      <span className="n">t</span>
                      <span className="n">s</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">t</span>
                      <span className="n">h</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                    </span>
                    <a title="labs" href="/labs">
                      <span className="n">c</span>
                      <span className="n">o</span>
                      <span className="n">d</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                      <span className="n">l</span>
                      <span className="n">a</span>
                      <span className="n">b</span>
                      <span className="n">o</span>
                      <span className="n">r</span>
                      
                      <span className="n">a</span>
                      <span className="n">t</span>
                      <span className="n">o</span>
                      <span className="n">r</span>
                      <span className="n">y</span>
                    </a>
                    <span>
                      <span className="n">.</span>
                    </span>
                  </h2>
                  <p>
                    <span>
                      <span className="n">F</span>
                      <span className="n">e</span>
                      <span className="n">e</span>
                      <span className="n">l</span>
                      <span className="n"> </span>
                      <span className="n">f</span>
                      <span className="n">r</span>
                      <span className="n">e</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                      <span className="n">t</span>
                      <span className="n">o</span>
                      <span className="n"> </span>
                      <span className="n">t</span>
                      <span className="n">a</span>
                      <span className="n">k</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n"> </span>
                      <span className="n">l</span>
                      <span className="n">o</span>
                      <span className="n">o</span>
                      <span className="n">k</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">m</span>
                      <span className="n">y</span>
                      <span className="n"> </span>
                      <span className="n">l</span>
                      <span className="n">a</span>
                      <span className="n">t</span>
                      <span className="n">e</span>
                      <span className="n">s</span>
                      <span className="n">t</span>
                      <span className="n"> </span>
                      <span className="n">p</span>
                      <span className="n">r</span>
                      <span className="n">o</span>
                      <span className="n">j</span>
                      <span className="n">e</span>
                      <span className="n">c</span>
                      <span className="n">t</span>
                      <span className="n">s</span>
                      <span className="n"> </span>
                      <span className="n">o</span>
                      <span className="n">n</span>
                      <span className="n"> </span>
                      <span className="n">t</span>
                      <span className="n">h</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                    </span>
                    <a itemProp="significantLink" href="/portfolio" title="web portfolio">
                      <span className="n">w</span>
                      <span className="n">e</span>
                      <span className="n">b</span>
                      <span className="n"> </span>
                      <span className="n">p</span>
                      <span className="n">o</span>
                      <span className="n">r</span>
                      <span className="n">t</span>
                      <span className="n">f</span>
                      <span className="n">o</span>
                      <span className="n">l</span>
                      <span className="n">i</span>
                      <span className="n">o</span>
                      <span className="n"> </span>
                      <span className="n">p</span>
                      <span className="n">a</span>
                      <span className="n">g</span>
                      <span className="n">e</span>
                    </a>
                    <span>
                      <span className="n">.</span>
                    </span>
                  </p>
                  <address>
                    <span>
                      <span className="n">R</span>
                      <span className="n">e</span>
                      <span className="n">m</span>
                      <span className="n">o</span>
                      <span className="n">t</span>
                      <span className="n">e</span>
                      <span className="n">l</span>
                      <span className="n">y</span>
                      <span className="n"> </span>
                      <span className="n">a</span>
                      <span className="n">v</span>
                      <span className="n">a</span>
                      <span className="n">i</span>
                      <span className="n">l</span>
                      <span className="n">a</span>
                      <span className="n">b</span>
                      <span className="n">l</span>
                      <span className="n">e</span>
                      <span className="n"> </span>
                    </span>
                    <span itemProp="locationCreated">
                      <span className="n">U</span>
                      <span className="n">T</span>
                      <span className="n">C</span>
                      <span className="n">−</span>
                      <span className="n">8</span>
                      <span className="n"> </span>
                      <span className="n">t</span>
                      <span className="n">o</span>
                      <span className="n"> </span>
                      <span className="n">U</span>
                      <span className="n">T</span>
                      <span className="n">C</span>
                      <span className="n">+</span>
                      <span className="n">1</span>
                    </span>
                    <span>
                      <span className="n">.</span>
                      <span className="n"> </span>
                    </span>
                    <a title="Contact Email" href="mailto:warrenpeterson141414@gmail.com">
                      <span className="n">w</span>
                      <span className="n">a</span>
                      <span className="n">r</span>
                      <span className="n">r</span>
                      <span className="n">e</span>
                      <span className="n">n</span>
                      <span className="n">p</span>
                      <span className="n">e</span>
                      <span className="n">t</span>
                      <span className="n">e</span>
                      <span className="n">r</span>
                      <span className="n">s</span>
                      <span className="n">o</span>
                      <span className="n">n</span>
                      <span className="n">1</span>
                      <span className="n">4</span>
                      <span className="n">1</span>
                      <span className="n">4</span>
                      <span className="n">1</span>
                      <span className="n">4</span>
                      <span className="n">@</span>
                      <span className="n">g</span>
                      <span className="n">m</span>
                      <span className="n">a</span>
                      <span className="n">i</span>
                      <span className="n">l</span>
                      <span className="n">.</span>
                      <span className="n">c</span>
                      <span className="n">o</span>
                      <span className="n">m</span>
                      <b className="cursor n">_</b>
                    </a>
                  </address>
                </div>
                <div>
                <div className="game" >
                  <div id="stars"></div>
                  <div id="stars2"></div>
                  <div id="stars3"></div>
                  <div id="spaceship" className="spaceship" ref={spaceshipRef}></div>
                  <div id="health-bar" className="health-bar" style={{ width: `${health}%` }}></div>
                  <div className="destroy" >
                  <div >
                  {showWinMessage && (
                    <div className="win-message">
                    <h2>Congratulations!</h2>
                    <p>You won the game!</p>
                    <awesome-button
                      role='button'
                      progress="true"
                      size="large"
                      success="All set!"
                      id='play-again-button'
                      className="play-again-button"
                      onClick={() => setShowWinMessage(false)}
                    >
                      <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        restartGame(); // Call the startGame function
                      }}
                      className="aws-btn aws-btn--primary aws-btn--large aws-btn--progress aws-btn--visible restart"
                    >
                          <span className="aws-btn__container">
                            <span className="aws-btn__wrapper">
                              <span className="aws-btn__content aws-btn__progress" data-status="All set!" data-loading="Wait for it ..">
                                <span >Play Again</span>
                              </span>
                            </span>
                          </span>
                        </a>
                      </awesome-button>
                    </div>
                  
                  )}
                  </div>
                      <awesome-button role="button" id="destroy-button" progress="true" size="large" success="All set!" onClick={startGame}>
                        <a href="#" className="aws-btn aws-btn--primary aws-btn--large aws-btn--progress aws-btn--visible">
                          <span className="aws-btn__container">
                            <span className="aws-btn__wrapper">
                              <span className="aws-btn__content aws-btn__progress" data-status="All set!" data-loading="Wait for it ..">
                                <span>Destroy this webpage</span>
                              </span>
                            </span>
                          </span>
                        </a>
                      </awesome-button>
                        
                    
                      
                    
                    </div>

                    
                  </div>
                </div>
                  <div className="follow-me">
                    <ul>
                      <li>
                        <a className="github" target="" href="https://github.com/warrengslice" title="Follow on GitHub">
                          <span>Follow on Github</span>
                        </a>
                      </li><li>
                        <a className="linkedin" target="" href="https://linkedin.com/in/warrenpetersonbacs" title="Connect on Linkedin">
                          <span>Connect on Linkedin</span>
                        </a>
                      </li><li>
                        <a className="instagram" target="" href="https://instagram.com/warrenpeterson@141414@gmail.com" title="Follow on Instagram">
                          <span>Follow on Instagram</span>
                        </a>
                      </li><li>
                        <a className="club" target="" href="https://webanimation.club" title="Web Animation Club Library | CSS Transition Callbacks">
                          <span>WAC</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  
                  <meta itemProp="dateModified" content="3-22-2024"/>
                  <meta itemProp="dateCreated" content="3-08-2024"/>
                  <link itemProp="url" href="https://warrenpetersonportfolio.com"/>
                  <link itemProp="keywords" href="web developer portfolio, web developer, portfolio, UI/UX specialist, react, react native, javascript"/>
                  <meta itemProp="genre" content="Web Developer Portfolio"/>
                  <meta itemProp="award" content="https://thefwa.com/cases/web-components-are-awesome"/>
                  <meta itemProp="timeRequired" content="5 years"/><link itemProp="primaryImageOfPage" href="https://warrenpetersonportfolio.com/images/warren-peterson-web-developer-portfolio.gif"/>
                  <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                    <meta itemProp="name" content="Warren Peterson"/>
                    <meta itemProp="image" content="https://warrenpetersonportfolio.com/images/warren-peterson-oil.jpg"/>
                    <meta itemProp="jobTitle" content="Software Developer, UI/UX Specialist"/>
                    <meta itemProp="description" content="UI/UX developer specialist. React, React Native consultant. Remotely available from UTC+1 to UTC-8."/>
                    <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                    <meta itemProp="owns" content="https://warrenpetersonportfolio.com"/>
                    <meta itemProp="owns" content="https://dermatomanoela.com.br"/>
                    <meta itemProp="knowsLanguage" content="English, Spanish"/>
                  </span>
                  <canvas className="explode" height="969" width="1305"></canvas>

                  
                </div>

            
            
              <div className="about-list pages" >
                <div className="wrapper">
                  <ul className="grid-list cf_">
                    <li className="item repo">
                      <a href="/demo/react-awesome-button" className="screen">
                        <div className="bar">
                          <h3>React Awesome Button Component</h3>
                          <i></i>
                        </div>
                        <div className="main">
                          <picture className="back">
                            <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.webp" type="image/webp"/>
                            <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.jpg" type="image/jpeg"/>
                            <img src="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.jpg"/>
                          </picture>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>Button Component</li>
                                <li>Animated Button</li>
                                <li>UI Component</li>
                                <li>React</li>
                                <li>Javascript</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <em className="github">Source on GitHub</em>
                      </a>
                    </li>
                    <li className="item repo"><a href="/demo/react-awesome-slider" className="screen">
                      <div className="bar">
                        <h2>React Awesome Slider Component</h2>
                        <i></i>
                      </div>
                      <div className="main">
                        <picture className="back">
                          <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-slider/list.webp" type="image/webp"/>
                          <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-slider/list.jpg" type="image/jpeg"/>
                          <img src="https://warrenpetersonportfolio.com/images/labs/awesome-slider/list.jpg"/></picture><div className="tags">
                            <div>
                              <ul>
                                <li>Image Gallery</li>
                                <li>UI Component</li>
                                <li>React</li>
                                <li>Javascript</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <em className="github">Source on GitHub</em>
                      </a>
                    </li>
                    <li className="item repo">
                      <a href="https://github.com/warrengslice/react-native-really-awesome-button" className="screen">
                        <div className="bar">
                          <h2>React Native Awesome Button Component</h2>
                          <i></i>
                        </div>
                        <div className="main">
                          <picture className="back">
                            <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.webp" type="image/webp"/>
                            <source srcSet="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.jpg" type="image/jpeg"/>
                            <img src="https://warrenpetersonportfolio.com/images/labs/awesome-button/list.jpg"/>
                          </picture>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>Button Component</li>
                                <li>Animated Button</li>
                                <li>UI Component</li>
                                <li>React Native</li>
                                <li>Javascript</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <em className="github">Source on GitHub</em>
                      </a>
                    </li>
                    <li className="item article">
                      <a href="/labs/getelementbyid-javascript-dom-method-performance-comparison" className="screen">
                        <div className="bar">
                          <h3>Coding</h3>
                          <i></i>
                        </div>
                        <div className="main">
                          <div className="title">
                            <div>
                              <h2>GetElementById Javascript DOM Method</h2>
                            </div>
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>Javascript</li>
                                <li>ES6</li>
                                <li>Article</li>
                                <li>Coding Tips</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">

                          </div>
                        </div>
                        <em className="coding">Coding</em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="loader">

        </section>
      </main>
      <div id="page-loader" className="avatar-loader go-down">
        <div className="avatar active first">
          <div className="avatar-wrapper">
            <Logo/>
            <img className="ninja" alt="Avatar" src="/images/avatar.svg"/>
          </div>
        </div>
      </div>


      <div id="loom-companion-mv3" >
  <section id="shadow-host-companion"></section>
</div>
<div id="loader-bar"></div>
<div className="quick-search hidden done">
  <div className="content">
    <span className="close">

    </span>
    <input type="text" name="search" value="" autoComplete="off"/>
    <div className="results"></div>
  </div>
</div>
</div>
    );
    
};

export default About;

