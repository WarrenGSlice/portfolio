import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import "./About.css";
import 'react-awesome-slider/dist/styles.css';
import { LazyMotion, domAnimation } from "framer-motion";


const Portfolio = (props, {children}) => {
    const [isHover, setHover] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Show All'); // State variable to keep track of selected filter
    const [isTransitioning, setIsTransitioning] = useState(false);


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

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter); // Update selected filter state when a filter button is clicked
        filterProjects(filter); // Filter projects based on the selected filter
    };

    const filterProjects = (filter) => {
        const projects = document.querySelectorAll('.item'); // Get all project elements
        projects.forEach(project => {
            const tags = project.querySelectorAll('.tags ul li');
            let match = false;
            tags.forEach(tag => {
                if (tag.textContent.toUpperCase() === filter.toUpperCase()) {
                    match = true;
                }
            });
            if (filter === 'Show All' || match) {
                project.classList.remove('hidden'); // Show project if it matches the filter or if 'Show All' is selected
            } else {
                project.classList.add('hidden'); // Otherwise, hide the project
            }
        });
        updateFilterText(filter);
    };

    const updateFilterText = (filter) => {
        const filterText = document.querySelector('.filter-text');
        if (filter === 'Show All') {
            filterText.textContent = `Showing all projects. Use the filter to list them by skill or technology.`;
        } else {
            filterText.textContent = `Showing all projects using ${filter}.`;
        }
    };

    return ( 
    <main  id="page-content" className={isHover ? "hover" : "hidden"} >
        <div id="stars"></div>
         <div id="stars1"></div>
         <div id="stars2"></div>
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
                <LazyMotion strict features={domAnimation}>
                <div 
                    className="content pages" 
                    id="portfolio" 

                >
	                <section className="centered scene2">  

                        <div id="stars"></div>
                        <div id="stars1"></div>
                        <div id="stars2"></div>
		                <div className="wrapper" >
			                <header>
				                    <h1>web developer portfolio</h1>
				                    <h3>From Web Components and UI/UX animations to React.JS, Angular.JS, Spring Boot, PHP, ASP.NET, and Node.JS. Check out my latest web software development portfolio projects.</h3>
				                    <div className="filters hidden">
                                    <ul>
                                        {['Show All', 'FRONT-END', 'BACK-END', 
                                            'HTML5', 'REACTJS', 'EXPRESSJS', 'JAVASCRIPT', 
                                            'NODEJS', 'SPRING', '.NET', 'RESTAPI', 
                                            'CSS', 'POSTGRESQL', 'MYSQL', 'MSSQL', 
                                            'UI/UX DESIGN', 'ANIMATIONS', 'GAME DESIGN', 'AGILE', 
                                            'JAVA', 'C#', 'C++', 'PHP']
                                            .map((filter, index) => (
                                            <li 
                                                key={index} 
                                                title={`Filter by ${filter}`} 
                                                className={selectedFilter === filter ? 'active' : ''} 
                                                onClick={() => handleFilterClick(filter)}>
                                                <span>{filter}</span>
                                            </li>
                                        ))}
                                    </ul>
					                    <small className="filter-text">Showing all projects using. Use the filter to list them by skill or technology.</small>
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
                                                    <img src='https://i.imgur.com/nAPvCPJ.png' type="image/png"/>
                                                    {/*<source srcSet={require('./images/player-projector1-small.png')} type="image/png"/>
                                                    <img src={require('./images/player-projector1-small.png')} />*/}
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>    
                                                            <li>CSS</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REACTJS</li>
                                                            <li>EXPRESSJS</li>
                                                            <li className="hidden">NODEJS</li>
                                                            <li className="hidden">AGILE</li>
                                                            <li className="hidden">RESTAPI</li>
                                                            <li className="hidden">JAVASCRIPT</li>
                                                            <li className="hidden">TYPESCRIPT</li>
                                                            <li className="hidden">MYSQL</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs1" className="imgs">
                                                    <img src='https://i.imgur.com/O0GKN1r.png' type="image/png"/>
                                                    {/*<source srcSet={require('./images/player-projector2-small.jpeg')} type="image/jpeg"/>
                                                    <img src={require('./images/player-projector2-small.jpeg')}/>*/}
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
                                                    <video className="video" preload="auto" autoPlay={true} loop={true} muted={true}>
                                                        <source src="https://i.imgur.com/jTd5DfD.mp4" type="video/mp4"/>
                                                        {/*<source srcSet={require('./images/small-cradle-fast.mp4')} type="video/mp4"/>*/}
                                                    </video>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBSITE</li>
                                                            <li>HTML5</li>     
                                                            <li>SPRING</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>UI/UX DESIGN</li>
                                                            <li>PHOTOSHOP</li>
                                                            <li>ILLUSTRATOR</li>
                                                            <li>JAVASCRIPT</li>
                                                            <li className="hidden">CSS</li>
                                                            <li className="hidden">JAVA</li>
                                                            <li className="hidden">ARTWORK</li>
                                                            <li className="hidden">FRONT-END</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs2" className="imgs">
                                                    <img src='https://i.imgur.com/tgmolVI.png' type="image/png"/>
                                                    {/*<source srcSet={require('./images/cradle-1-small.jpeg')} type="image/jpeg"/>
                                                    <img src={require('./images/cradle-1-small.jpeg')}/>*/}
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
                                                    <video className="vidvid" preload="auto" autoPlay={true} loop={true} muted={true} >
                                                        <source src='https://i.imgur.com/gHFT8VH.mp4' type="video/mp4"/>
                                                        {/*<source src={require('./images/shoe-fly-fast.mp4')} type="video/mp4"/>*/}
                                                    </video>
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>
                                                            <li>CSS</li>
                                                            <li>JAVA</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>SPRING</li>  
                                                            <li>RESTAPI</li>      
                                                            <li className="hidden">MYSQL</li>
                                                            <li className="hidden">CRUD</li>
                                                            <li className="hidden">AGILE</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                            <li className="hidden">SPRINGSECURITY</li>
                                                            <li className="hidden">OAUTH</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs3" className="imgs">
                                                    <img src='https://i.imgur.com/h3IO6zf.png' type="image/png"/>
                                                    {/*<img src={require('./images/shoe-fly1-small.jpeg')}/>*/}
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
                                                    <img src='https://i.imgur.com/S0XscRj.png' type="image/png"/>
                                                   {/* <img src={require('./images/portfolio-1-small.png')}/>*/}
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>   
                                                            <li>WEBAPP</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REACTJS</li>
                                                            <li>NODEJS</li>
                                                            <li>SNAPSVG</li>
                                                            <li className="hidden">WEBSITE</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">HTML5</li>
                                                            <li className="hidden">CSS</li>
                                                            <li className="hidden">JAVASCRIPT</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                            <li className="hidden">GAME DESIGN</li>
                                                            <li className="hidden">AGILE</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs4" className="imgs">
                                                    <img src='https://i.imgur.com/51HHMip.png' type="image/png"/>
                                                    {/*<img src={require('./images/portfolio-2-small.png')}/>*/}
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
                                                    <img src='https://i.imgur.com/Tlu0Dmi.png' type="image/png"/>
                                                    {/*<img src={require('./images/maze-solver1.png')}/>*/}
                                                </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>C++</li>
                                                            <li>STACK</li>
                                                            <li>QUEUE</li>
                                                            <li>VISUALSTUDIO</li>
                                                            <li>GAME DESIGN</li>
                                                            <li className="hidden">BACK-END</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture id="imgs5" className="imgs">
                                                    <img src='https://i.imgur.com/ImHdUBs.png' type="image/png"/>
                                                    {/*<source srcSet="https://i.imgur.com/WCHMXjF.png" type="image/png"/>
                                                    <img src={require('./images/maze-solver2.webp')}/>*/}
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
                                                        <img src='https://i.imgur.com/WMsM8xj.png' type="image/png"/>
                                                        {/*<img src={require('./images/tasty-bites1-small.png')}/>*/}
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>FRONT-END</li>
                                                            <li>JAVASCRIPT</li>
                                                            <li>HTML5</li>
                                                            <li>CSS</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>POSTGRESQL</li>
                                                            <li>BACK-END</li>
                                                            <li>FULL-STACK</li>
                                                            <li className="hidden">NODEJS</li>

                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">AGILE</li>
                                                            <li className="hidden">EXPRESSJS</li>
                                                            <li className="hidden">REACTJS</li>
                                                            <li className="hidden">RESTAPI</li>
                                                            <li className="hidden">SECURITYJS</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs6" className="imgs">
                                                        <img src='https://i.imgur.com/QADFIbB.png' type="image/png"/>
                                                        {/*<img src={require('./images/tasty-bites2-small.png')}/>*/}
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
                                                    <video className="video" preload='auto' autoPlay={true} loop={true} muted={true} style={{objectFit:"none", objectPosition:"-32px -25px", width:"118%"}}>
                                                        <source src='https://i.imgur.com/BNOT7hT.mp4' type="video/mp4"/>
                                                        {/*<source src={require('./images/minsweeper-trim.mp4')} type="video/mp4"/>*/}
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
                                                            <li>AGILE</li>
                                                            <li>RESTAPI</li>      

                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">.NET</li>
                                                            <li className="hidden">JQUERY</li>
                                                            <li className="hidden">JAVSCRIPT</li>
                                                            <li className="hidden">UI/UX DESIGN</li>
                                                            <li className="hidden">CSS</li>
                                                            <li className="hidden">HTML5</li>
                                                            <li className="hidden">MSSQL</li>
                                                            <li className="hidden">FRONT-END</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs7" className="imgs">
                                                        <img src='https://i.imgur.com/hnFKiqA.png' type="image/png"/>
                                                        {/*<img src={require('./images/minsweeper1-small.jpeg')}/>*/}
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
                                                        <img src='https://i.imgur.com/ssfpFho.png' type="image/png"/>
                                                        {/*<img src={require('./images/blog1.png')}/>*/}
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
                                                            <li>RESTAPI</li>      

                                                            <li className="hidden">WEBAPP</li>
                                                            <li className="hidden">CSS3</li>
                                                            <li className="hidden">BACK-END</li>
                                                            <li className="hidden">FULL-STACK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs8" className="imgs">
                                                        <img src='https://i.imgur.com/fCCS4hF.png' type="image/png"/>
                                                        {/*<img src={require('./images/blog2-small.png')}/>*/}
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item9" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover9} onMouseLeave={handleMouseLeave9}>
                                        <a href="/project9" className="screen">
                                            <div className="bar">
                                                    <h2>UNO GAME </h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <img src='https://i.imgur.com/N6rQPJz.png' type="image/png"/>
                                                        {/*<img src={require('./images/uno1-small.png')}/>*/}
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
                                                        <img src='https://i.imgur.com/Mceh1yJ.png' type="image/png"/>
                                                        {/*<img src={require('./images/uno2-small.png')}/>*/}
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li id="item10" className={`item  repo ${isHover ? '' : ''}`} onMouseOver={toggleHover10} onMouseLeave={handleMouseLeave10} >
                                        <a href="/project10" className="screen">
                                            <div className="bar">
                                                    <h2>Wack-A-Mole</h2>
                                                <i></i>
                                            </div>
                                            <div className="main">
                                                    <picture className="back">
                                                        <img src='https://i.imgur.com/IDDYhsA.png' type="image/png"/>
                                                        <img src={require('./images/wack-a-mole1.png')}/>
                                                    </picture>
                                                <div className="tags">
                                                    <div>
                                                        <ul>
                                                            <li>C#</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>.NET</li>
                                                            <li>UX DESIGN</li>
                                                            <li>GAMEDESIGN</li>
                                                            <li>FRONT-END</li>
                                                            <li>CONSOLEAPP</li>
                                                            <li className="hidden">WINDOWSFORMS</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <picture id="imgs10" className="imgs">
                                                        <img src='https://i.imgur.com/HnQSVO1.png' type="image/png"/>
                                                        {/*<img src={require('./images/wack-a-mole2.png')}/>*/}
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
                {children}
                </LazyMotion>
            </div>
        </section>
    </main>
    );
};


export default Portfolio;