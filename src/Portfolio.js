import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Portfolio = (props) => {
    const [isHover, setHover] = useState(false);


    const toggleHover = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item1').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs1').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item1').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      }  
    };
    
    const handleMouseLeave = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item1').classList.remove('hover');
        document.getElementById('item1').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs1").classList.remove('active');      
    };

    const toggleHover2 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item2').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs2').classList.add('active');
        const timeoutId =setTimeout(() => {
          document.getElementById('item2').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave2 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item2').classList.remove('hover');
        document.getElementById('item2').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs2").classList.remove('active');      
    };

    const toggleHover3 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item3').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs3').classList.add('active');
        const timeoutId =setTimeout(() => {
          document.getElementById('item3').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave3 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item3').classList.remove('hover');
        document.getElementById('item3').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs3").classList.remove('active');      
    };

    const toggleHover4 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item4').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs4').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item4').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave4 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item4').classList.remove('hover');
        document.getElementById('item4').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs4").classList.remove('active');      
    };

    const toggleHover5 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item5').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs5').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item5').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave5 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item5').classList.remove('hover');
        document.getElementById('item5').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs5").classList.remove('active');      
    };

    const toggleHover6 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item6').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs6').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item6').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave6 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item6').classList.remove('hover');
        document.getElementById('item6').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs6").classList.remove('active');      
    };

    const toggleHover7 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item7').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs7').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item7').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave7 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item7').classList.remove('hover');
        document.getElementById('item7').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs7").classList.remove('active');      
    };

    const toggleHover8 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item8').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs8').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item8').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave8 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item8').classList.remove('hover');
        document.getElementById('item8').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs8").classList.remove('active');      
    };

    const toggleHover9 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item9').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs9').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item9').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave9 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item9').classList.remove('hover');
        document.getElementById('item9').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs9").classList.remove('active');      
    };

    const toggleHover10 = () => {
        setHover(!isHover);
      // Start the second animation after a delay when opening
      if (!isHover) {
        document.getElementById('item10').classList.add('hover');
        document.getElementById('screen').classList.add('active');
        // Switch images by toggling classes
        document.querySelector('.back').classList.remove('active');
        document.querySelector('#imgs10').classList.add('active');
        const timeoutId = setTimeout(() => {
          document.getElementById('item10').classList.add('ready');
        }, 400); // Add a delay to match the duration of the first animation
        return () => clearTimeout(timeoutId);
      } 
    };
    
    const handleMouseLeave10 = () => {
        setHover(isHover);
        // If not hovered, switch back to the original image
        //document.querySelector('.imgs').classList.remove('active');
        //document.querySelector('.back').classList.add('active');
        document.getElementById('item10').classList.remove('hover');
        document.getElementById('item10').classList.remove('ready');
        document.getElementById('screen').classList.remove('active');
        document.getElementById("imgs10").classList.remove('active');      
    };

    return ( 
    <main  id="page-content" className={isHover ? "hover" : "hidden"} >
        <section className="loader"></section>

        <section className="current">
            <div>
                <div className="page-control">
 
                        <a href="/Contact" className="next">
                            <span>Contact</span>
                            <em></em>
                        </a>
                        
                        <a href="/" className="prev">
                            <span>About</span>
                            <em></em>
                        </a>
                        <div className="ribbon">
                            <a target="_blank" href="https://github.com/warrengslice" title="Follow on Github">FOLLOW ON GITHUB</a>
                        </div>
                </div>
                <div className="content pages" id="portfolio" >
	                <section className="centered">  
                        <div id="stars"></div>
                        <div id="stars1"></div>
                        <div id="stars2"></div>
		                <div className="wrapper" >
			                <header>
				                    <h1>web developer portfolio</h1>
				                    <h3>From Web Components and UI/UX animations to React.JS, Angular.JS, Spring Boot, PHP, ASP.NET, and Node.JS. Check out my latest web software development portfolio projects.</h3>
				                    <div className="filters hidden">
					                    <ul>
						                    <li className="active" title="Show All Projects">
							                    <span>Show All</span>
						                    </li>
                                            <li title="Filter by FRONT-END">
                                                <span>FRONT-END</span>
                                            </li>
                                            <li title="Filter by BACK-END">
                                                <span>BACK-END</span>
                                            </li>
                                            <li title="Filter by FULL-STACK">
                                                <span>FULL-STACK</span>
                                            </li>
                                            <li title="Filter by HTML5">
                                                <span>HTML5</span>
                                            </li>
                                            <li title="Filter by REACTJS">
                                                <span>REACTJS</span>
                                            </li>
                                            <li title="Filter by EXPRESSJS">
                                                <span>EXPRESSJS</span>
                                            </li>
                                            <li title="Filter by JAVASCRIPT">
                                                <span>JAVASCRIPT</span>
                                            </li>
                                            <li title="Filter by NODEJS">
                                                <span>NODEJS</span>
                                            </li>
                                            <li title="Filter by SPRING">
                                                <span>SPRING</span>
                                            </li>
                                            <li title="Filter by .NET">
                                                <span>.NET</span>
                                            </li>
                                            <li title="Filter by RESTAPI">
                                                <span>RESTAPI</span>
                                            </li>
                                            <li title="Filter by CSS">
                                                <span>CSS</span>
                                            </li>
                                            <li title="Filter by POSTGRESQL">
                                                <span>POSTGRESQL</span>
                                            </li>
                                            <li title="Filter by MYSQL">
                                                <span>MYSQL</span>
                                            </li>
                                            <li title="Filter by MSSQL">
                                                <span>MSSQL</span>
                                            </li>
                                            <li title="Filter by UI/UX DESIGN">
                                                <span>UI/UX DESIGN</span>
                                            </li>
                                            <li title="Filter by ANIMATIONS">
                                                <span>ANIMATIONS</span>
                                            </li>
                                            <li title="Filter by GAME DESIGN">
                                                <span>GAME DESIGN</span>
                                            </li>
                                            <li title="Filter by AGILE">
                                                <span>AGILE</span>
                                            </li>
                                            <li title="Filter by JAVA">
                                                <span>JAVA</span>
                                            </li>
                                            <li title="Filter by C#">
                                                <span>C#</span>
                                            </li>
                                            <li title="Filter by C++">
                                                <span>C++</span>
                                            </li>
                                            <li title="Filter by JQUERY">
                                                <span>JQUERY</span>
                                            </li>
                                            <li title="Filter by PHP">
                                                <span>PHP</span>
                                            </li>
                                            <li title="Filter by TYPESCRIPT">
                                                <span>TYPESCRIPT</span>
                                            </li>
                                            <li title="Filter by ARTWORK">
                                                <span>ARTWORK</span>
                                            </li>
					                    </ul>
					                    <small>Showing all projects. Use the filter to list them by skill or technology.</small>
				                        <em>Filtering Projects</em>
                                    </div>
			                </header>
                            <ul className="grid-list cf_" >
                                    <li id="item1" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover} onMouseLeave={handleMouseLeave}>
                                        <a id="screen" href="/project1" className="screen">
                                            <div className="bar">
                                                    <h2>Player Projector </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                <picture className="back">
                                                    <source srcset="https://i.imgur.com/XmHZMkq.png" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/XmHZMkq.png" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/XmHZMkq.png" />
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>    
                                                            <li>CSS MODULES</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REACTJS</li>
                                                            <li>EXPRESS</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">RESTAPI</li>
                                                            <li className="hidden">SASS</li>
                                                            <li className="hidden">TYPESCRIPT</li>
                                                            <li className="hidden">MYSQL</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs1" className="imgs">
                                                    <source srcset="https://i.imgur.com/KOXQOoO.jpeg" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/KOXQOoO.jpeg" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/KOXQOoO.jpeg"/>
                                                </picture>
                                            </div>
                                            {/*<em className="fresh">Recent</em>*/}
                                        </a>
                                    </li>
                                    <li id="item2" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover2} onMouseLeave={handleMouseLeave2}>
                                        <a href="/project2" className="screen">
                                            <div className="bar">
                                                <h2>The Cradle of Existence</h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                <picture className="back">
                                                    <video className="video" autoPlay={true} loop={true} muted={true}>
                                                        <source src="https://thecradleofexistence.com/images/New%20video.mp4" type="video/mp4"/>
                                                    </video>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBSITE</li>
                                                            <li>HTML5</li>     
                                                            <li>SPRINGBOOT</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>UI/UX DESIGN</li>
                                                            <li>PHOTOSHOP</li>
                                                            <li>ILLUSTRATOR</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">JAVA</li>
                                                            <li className="hidden">ARTWORK</li>
                                                            <li className="hidden">FRONT-END</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs2" className="imgs">
                                                    <source srcset="https://i.imgur.com/dzIbOob.jpeg" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/dzIbOob.jpeg" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/dzIbOob.jpeg"/>
                                                </picture>
                                            </div>
                                            {/*<em className="github">Source on GitHub</em>*/}
                                        </a>
                                    </li>
                                    <li id="item3" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover3} onMouseLeave={handleMouseLeave3}>
                                        <a href="/project3" className="screen">
                                            <div className="bar">
                                                <h2>Shoe Fly / Order Management </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                <picture className="back">
                                                    <video className="vidvid" autoPlay={true} loop={true} muted={true} >
                                                        <source src="https://i.imgur.com/OGgTtv0.mp4" type="video/mp4"/>
                                                    </video>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>
                                                            <li>CSS3</li>
                                                            <li>JAVA</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>SPRINGBOOT</li>      
                                                            <li className="hidden">MYSQL</li>
                                                            <li className="hidden">CRUD</li>
                                                            <li className="hidden">AGILE</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                            <li className="hidden">SPRINGSECURITY</li>
                                                            <li className="hidden">OAUTH</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs3" className="imgs">
                                                    <source srcset="https://i.imgur.com/D7wzSrg.jpeg" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/D7wzSrg.jpeg" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/D7wzSrg.jpeg"/>
                                                </picture>
                                            </div>
                                            {/*<em className="fwa">FWA award</em>*/}
                                        </a>
                                    </li>
                                    <li id="item4" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover4} onMouseLeave={handleMouseLeave4}>
                                        <a href="/project4" className="screen">
                                            <div className="bar">
                                                <h2>Portfolio Web Application </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                <picture className="back">
                                                    <source srcset="https://i.imgur.com/k4qEEWb.png" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/k4qEEWb.png" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/k4qEEWb.png"/>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>   
                                                            <li>WEBAPP</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REACTJS</li>
                                                            <li>SNAPSVG</li>
                                                            <li className="hidden">WEBSITE</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">HTML5</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">JAVASCRIPT</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs4" className="imgs">
                                                    <source srcset="https://i.imgur.com/pvfw9Ia.png" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/pvfw9Ia.png" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/pvfw9Ia.png"/>
                                                </picture>
                                            </div>
                                            {/*<em className="fwa">Cool WebApp</em>*/}
                                        </a>
                                    </li>
                                    <li id="item5" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover5} onMouseLeave={handleMouseLeave5}>
                                        <a href="/project5" className="screen">
                                            <div className="bar">
                                                    <h2>Maze Solver</h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                <picture className="back">
                                                    <source srcset="https://i.imgur.com/viiUSry.png" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/viiUSry.png" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/viiUSry.png"/>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>C++</li>
                                                            <li>STACK</li>
                                                            <li>QUEUE</li>
                                                            <li>VISUALSTUDIO</li>
                                                            <li>GAME DESIGN</li>
                                                            <li className="hidden">BACK-END</li></ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs5" className="imgs">
                                                    <source srcset="https://i.imgur.com/WCHMXjF.png" type="image/webp"/>
                                                    <source srcset="https://i.imgur.com/WCHMXjF.png" type="image/jpeg"/>
                                                    <img src="https://i.imgur.com/WCHMXjF.png"/>
                                                </picture>
                                            </div>
                                            {/*<em className="fwa mobile">FWA Award</em>*/}
                                        </a>
                                    </li>
                                    <li id="item6" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover6} onMouseLeave={handleMouseLeave6}>
                                        <a href="/project6" className="screen">
                                            <div className="bar">
                                                    <h2>Tasty Bites Restaurant </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <source srcset="https://i.imgur.com/2SYp49O.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/2SYp49O.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/2SYp49O.png"/>
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>FRONT-END</li>
                                                            <li>JAVASCRIPT</li>
                                                            <li>HTML5</li>
                                                            <li>CSS3</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>POSTGRESQL</li>
                                                            <li>BACK-END</li>
                                                            <li>FULL-STACK</li>
                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">RESTAPI</li>
                                                            <li className="hidden">SECURITYJS</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs6" className="imgs">
                                                        <source srcset="https://i.imgur.com/QzCgHzM.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/QzCgHzM.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/QzCgHzM.png"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item7" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover7} onMouseLeave={handleMouseLeave7}>
                                        <a href="/project7" className="screen">
                                            <div className="bar">
                                                    <h2>MineSweeper Web Application </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                            <picture className="back">
                                                    <video className="video" autoPlay={true} loop={true} muted={true} style={{objectFit:"none", objectPosition:"-32px -25px", width:"118%"}}>
                                                        <source src="https://i.imgur.com/Kc0ecNo.mp4" type="video/mp4"/>
                                                    </video>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>C#</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>ASP NET CORE</li>
                                                            <li>MVC</li>
                                                            <li>GAME DESIGN</li>
                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">MSSQL</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs7" className="imgs">
                                                        <source srcset="https://i.imgur.com/d3uJhhr.jpeg" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/d3uJhhr.jpeg" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/d3uJhhr.jpeg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item8" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover8} onMouseLeave={handleMouseLeave8}>
                                        <a href="/project8" className="screen">
                                            <div className="bar">
                                                    <h2>Blogging Website </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <source srcset="https://i.imgur.com/lIezQfb.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/lIezQfb.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/lIezQfb.png"/>
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>PHP</li>
                                                            <li>HTML5</li>
                                                            <li>CSS</li>
                                                            <li>MYSQL</li>
                                                            <li>JAVASCRIPT</li>
                                                            <li>FRONT-END</li>
                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs8" className="imgs">
                                                        <source srcset="https://i.imgur.com/JaLooju.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/JaLooju.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/JaLooju.png"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item9" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover9} onMouseLeave={handleMouseLeave9} data-hidden="true">
                                        <a href="/project9" className="screen">
                                            <div className="bar">
                                                    <h2>UNO GAME </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <source srcset="https://i.imgur.com/JZbouM8.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/JZbouM8.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/JZbouM8.png"/>
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>FRONT-END</li>
                                                            <li>JAVA</li>
                                                            <li>GAMEDESIGN</li>
                                                            <li>NETBEANS</li>
                                                            <li>JFRAME</li>
                                                            <li className="hidden">CONSOLEAPP</li>
                                                            <li className="hidden">BACK-END</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs9" className="imgs">
                                                        <source srcset="https://i.imgur.com/zKME0SP.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/zKME0SP.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/zKME0SP.png"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item10" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover10} onMouseLeave={handleMouseLeave10} data-hidden="true">
                                        <a href="/project10" className="screen">
                                            <div className="bar">
                                                    <h2>Wack-A-Mole</h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <source srcset="https://i.imgur.com/IDDYhsA.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/IDDYhsA.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/IDDYhsA.png"/>
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>C#</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>.NET FRAMEWORK</li>
                                                            <li>UX DESIGN</li>
                                                            <li>GAMEDESIGN</li>
                                                            <li>FRONT-END</li>
                                                            <li>CONSOLEAPP</li>
                                                            <li className="hidden">WINDOWSFORMS</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs10" className="imgs">
                                                        <source srcset="https://i.imgur.com/36p43I0.png" type="image/webp"/>
                                                        <source srcset="https://i.imgur.com/36p43I0.png" type="image/jpeg"/>
                                                        <img src="https://i.imgur.com/36p43I0.png"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                            <footer>
                                <h4>Let's talk</h4>
                                <p>Wanna get in touch or talk about a project?
                                    <br/> Feel free to contact me via email at 
                                    <span className="fancy">
                                        <a href="mailto:warrenpeterson141414@gmail.com">WarrenPeterson141414@Gmail.com</a>
                                    </span>
                                    <br/> or drop a line in the form at the 
                                    <span className="fancy">
                                        <a href="/contact">contact page</a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </main>
    );
};


export default Portfolio;