import React from "react";
import "./Portfolio.css";


const Portfolio = () => {
    return (
        <main id="page-content" class="">
            <section class="loader"></section>
            <section class="current">
                <div>
                    <div class="page-control">
 
                        <a href="/Contact" class="next">
                            <span>Contact</span>
                            <em></em>
                        </a>
                        
                        <a href="/" class="prev">
                            <span>About</span>
                            <em></em>
                        </a>
                        <div class="ribbon">
                            <a target="_blank" href="https://github.com/warrengslice" title="Follow on Github">FOLLOW ON GITHUB</a>
                        </div>
                    </div>
                    <div class="content pages" id="portfolio">
	                    <section class="centered">
		                    <div class="wrapper">
			                    <header>
				                    <h1>web developer portfolio</h1>
				                    <h3>From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.</h3>
				                    <div class="filters hidden">
					                    <ul>
						                    <li class="active" title="Show All Projects">
							                    <span>Show All</span>
						                    </li>
                                            <li title="Filter by FRONT-END">
                                                <span>FRONT-END</span>
                                            </li>
                                            <li title="Filter by BACK-END">
                                                <span>BACK-END</span>
                                            </li>
                                            <li title="Filter by HTML5">
                                                <span>HTML5</span>
                                            </li>
                                            <li title="Filter by SASS">
                                                <span>SASS</span>
                                            </li>
                                            <li title="Filter by LESS">
                                                <span>LESS</span>
                                            </li>
                                            <li title="Filter by JAVASCRIPT">
                                                <span>JAVASCRIPT</span>
                                            </li>
                                            <li title="Filter by NODEJS">
                                                <span>NODEJS</span>
                                            </li>
                                            <li title="Filter by ELECTRON">
                                                <span>ELECTRON</span>
                                            </li>
                                            <li title="Filter by REACTJS">
                                                <span>REACTJS</span>
                                            </li>
                                            <li title="Filter by METEOR">
                                                <span>METEOR</span>
                                            </li>
                                            <li title="Filter by COFFEESCRIPT">
                                                <span>COFFEESCRIPT</span>
                                            </li>
                                            <li title="Filter by MONGODB">
                                                <span>MONGODB</span>
                                            </li>
                                            <li title="Filter by MYSQL">
                                                <span>MYSQL</span>
                                            </li>
                                            <li title="Filter by BACKBONEJS">
                                                <span>BACKBONEJS</span>
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
					                    </ul>
					                    <small>Showing all projects. Use the filter to list them by skill or technology.</small>
				                        <em>Filtering Projects</em>
                                    </div>
			                    </header>
                                <ul class="grid-list cf_">
                                    <li class="item repo">
                                        <a href="/project1" class="screen">
                                            <div class="bar">
                                                    <h2>Project 1 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                <picture class="back">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/list.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/list.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/list.jpg"/>
                                                </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>    
                                                            <li>CSS MODULES</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REACTJS</li>
                                                            <li>REDUX</li>
                                                            <li class="hidden">CSS3</li>
                                                            <li class="hidden">ELECTRON</li>
                                                            <li class="hidden">SASS</li>
                                                            <li class="hidden">POSTCSS</li>
                                                            <li class="hidden">SPA</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture class="imgs">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/hover.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/hover.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/sky-go-desktop/hover.jpg"/>
                                                </picture>
                                            </div>
                                            <em class="fresh">Fresh</em>
                                        </a>
                                    </li>
                                    <li class="item repo">
                                        <a href="/project2" class="screen">
                                            <div class="bar">
                                                <h2>Project 2</h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                <picture class="back">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/list.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/list.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/list.jpg"/>
                                                </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBAPP</li>
                                                            <li>HTML5</li>     
                                                            <li>LESS</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>UI/UX DESIGN</li>
                                                            <li>METEORJS</li>
                                                            <li>MONGODB</li>
                                                            <li class="hidden">CSS3</li>
                                                            <li class="hidden">COFFEESCRIPT</li>
                                                            <li class="hidden">SPA</li>
                                                            <li class="hidden">OPENSOURCE</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture class="imgs">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/hover.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/hover.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/rocket-chat/hover.jpg"/>
                                                </picture>
                                            </div>
                                            <em class="github">Source on GitHub</em>
                                        </a>
                                    </li>
                                    <li class="item  repo">
                                        <a href="/project3" class="screen">
                                            <div class="bar">
                                                <h2>Project 3 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                <picture class="back">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/perverte/list.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/perverte/list.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/perverte/list.jpg"/>
                                                </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                            <li>WEBSITE</li>
                                                            <li>HTML5</li>
                                                            <li>CSS3</li>
                                                            <li>SASS</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>REQUIREJS</li>      
                                                            <li class="hidden">BACKBONEJS</li>
                                                            <li class="hidden">SNAPSVG</li>
                                                            <li class="hidden">SPA</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture class="imgs">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/perverte/hover.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/perverte/hover.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/perverte/hover.jpg"/>
                                                </picture>
                                            </div>
                                            <em class="fwa">FWA Award</em>
                                        </a>
                                    </li>
                                    <li class="item repo">
                                        <a href="/project4" class="screen">
                                            <div class="bar">
                                                <h2>Project 4 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                <picture class="back">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/whygowild/list.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/whygowild/list.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/whygowild/list.jpg"/>
                                                </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>   
                                                            <li>SASS</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>BACKBONEJS</li>
                                                            <li>SNAPSVG</li>
                                                            <li class="hidden">WEBSITE</li>
                                                            <li class="hidden">FRONT-END</li>
                                                            <li class="hidden">HTML5</li>
                                                            <li class="hidden">CSS3</li>
                                                            <li class="hidden">REQUIREJS</li>
                                                            <li class="hidden">SPA</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <picture class="imgs">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/whygowild/hover.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/whygowild/hover.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/whygowild/hover.jpg"/>
                                                </picture>
                                            </div>
                                            <em class="fwa">FWA Award</em>
                                        </a>
                                    </li>
                                    <li class="item  repo">
                                        <a href="/project5" class="screen">
                                            <div class="bar">
                                                    <h2>Project 5 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                <picture class="back">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/list.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/list.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/list.jpg"/>
                                                </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                            <li>JAVASCRIPT</li>
                                                            <li>HTML5</li>
                                                            <li>ANIMATIONS</li>
                                                            <li>UI/UX DESIGN</li>
                                                            <li>GAME DESIGN</li>
                                                            <li>NODEJS</li>
                                                            <li class="hidden">WEB COMPONENTS</li>
                                                            <li class="hidden">WEBSITE</li>
                                                            <li class="hidden">CSS3</li>
                                                            <li class="hidden">SASS</li>
                                                            <li class="hidden">REQUIREJS</li>
                                                            <li class="hidden">BACKBONEJS</li>
                                                            <li class="hidden">SNAPSVG</li>
                                                            <li class="hidden">SPA</li>
                                                            <li class="hidden">SOCKETIO</li>
                                                            <li class="hidden">EXPRESSJS</li>
                                                            <li class="hidden">MONGODB</li>
                                                            <li class="hidden">BACK-END</li></ul>
                                                    </div>
                                                </div>
                                                <picture class="imgs">
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/hover.webp" type="image/webp"/>
                                                    <source srcset="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/hover.jpg" type="image/jpeg"/>
                                                    <img src="https://warrenpetersonportfolio.com/images/portfolio/caferati-me/hover.jpg"/>
                                                </picture>
                                            </div>
                                            <em class="fwa mobile">FWA Award</em>
                                        </a>
                                    </li>
                                    <li class="item  repo">
                                        <a href="/project 6" class="screen">
                                            <div class="bar">
                                                    <h2>Project 6 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                    <picture class="back">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/list.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/list.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/list.jpg"/>
                                                    </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                                
                                                                <li>FRONT-END</li>
                                                                <li>JAVASCRIPT</li>
                                                                <li>HTML5</li>
                                                                
                                                                <li>SASS</li>
                                                                <li>ANIMATIONS</li>
                                                                
                                                                
                                                                <li>SNAPSVG</li>
                                                                
                                                        <li class="hidden">WEBSITE</li><li class="hidden">CSS3</li><li class="hidden">REQUIREJS</li><li class="hidden">BACKBONEJS</li><li class="hidden">SPA</li></ul>
                                                    </div>
                                                </div>
                                                    <picture class="imgs">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/hover.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/hover.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/florense-nyc/hover.jpg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item  repo">
                                        <a href="/project 7" class="screen">
                                            <div class="bar">
                                                    <h2>Project 7 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                    <picture class="back">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/list.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/list.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/list.jpg"/>
                                                    </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                                
                                                                
                                                                
                                                                <li>SASS</li>
                                                                <li>ANIMATIONS</li>
                                                                <li>REQUIREJS</li>
                                                                <li>SNAPSVG</li>
                                                                <li>GAME DESIGN</li>
                                                        <li class="hidden">WEBSITE</li><li class="hidden">HTML5</li><li class="hidden">CSS3</li></ul>
                                                    </div>
                                                </div>
                                                    <picture class="imgs">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/hover.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/hover.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/game-unimed/hover.jpg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item  repo">
                                        <a href="/project8" class="screen">
                                            <div class="bar">
                                                    <h2>Project 8 </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                    <picture class="back">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/list.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/list.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/list.jpg"/>
                                                    </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                                
                                                                <li>JAVASCRIPT</li>
                                                                <li>HTML5</li>
                                                                
                                                                <li>SASS</li>
                                                                <li>ANIMATIONS</li>
                                                                
                                                                
                                                                <li>SNAPSVG</li>
                                                                <li>SPA</li>
                                                        <li class="hidden">WEBSITE</li><li class="hidden">CSS3</li><li class="hidden">REQUIREJS</li><li class="hidden">BACKBONEJS</li></ul>
                                                    </div>
                                                </div>
                                                    <picture class="imgs">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/hover.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/hover.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/menu-mais-leve/hover.jpg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item  repo hidden" data-hidden="true">
                                        <a href="/portfolio/nmfons" class="screen">
                                            <div class="bar">
                                                    <h2>NMFONS </h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                    <picture class="back">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/nmfons/list.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/nmfons/list.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/nmfons/list.jpg"/>
                                                    </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                                
                                                                <li>FRONT-END</li>
                                                                <li>JAVASCRIPT</li>
                                                                <li>HTML5</li>
                                                                
                                                                <li>SASS</li>
                                                                <li>ANIMATIONS</li>
                                                                <li>REQUIREJS</li>
                                                                
                                                                
                                                                
                                                                <li>UX DESIGN</li>
                                                                
                                                                
                                                                
                                                        <li class="hidden">WEBAPP</li><li class="hidden">CSS3</li><li class="hidden">BACKBONEJS</li><li class="hidden">SNAPSVG</li><li class="hidden">SPA</li><li class="hidden">PHP</li><li class="hidden">MYSQL</li><li class="hidden">BACK-END</li></ul>
                                                    </div>
                                                </div>
                                                    <picture class="imgs">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/nmfons/hover.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/nmfons/hover.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/nmfons/hover.jpg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item  repo hidden" data-hidden="true">
                                        <a href="/portfolio/gramado-resort" class="screen">
                                            <div class="bar">
                                                    <h2>Gramado Resort</h2>
                                                <i></i>
                                            </div>
                                            <div class="main">
                                                    <picture class="back">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/list.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/list.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/list.jpg"/>
                                                    </picture>
                                                <div class="tags">
                                                    <div>
                                                        <ul>
                                                                
                                                                
                                                                
                                                                <li>LESS</li>
                                                                <li>ANIMATIONS</li>
                                                                <li>COFFEESCRIPT</li>
                                                                <li>UX DESIGN</li>
                                                                
                                                                <li>UX ARCHITECTURE</li>
                                                                <li>METEORJS</li>
                                                                <li>MONGODB</li>
                                                        <li class="hidden">WEBSITE</li><li class="hidden">HTML5</li><li class="hidden">CSS3</li><li class="hidden">SPA</li></ul>
                                                    </div>
                                                </div>
                                                    <picture class="imgs">
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/hover.webp" type="image/webp"/>
                                                        <source srcset="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/hover.jpg" type="image/jpeg"/>
                                                        <img src="https://warrenpetersonportfolio.com/images/portfolio/gramado-resort/hover.jpg"/>
                                                    </picture>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            <footer>
                                <h4>Let's talk</h4>
                                <p>Wanna get in touch or talk about a project?
                                    <br/> Feel free to contact me via email at 
                                    <span class="fancy">
                                        <a href="mailto:warrenpeterson141414@gmail.com">WarrenPeterson141414@Gmail.com</a>
                                    </span>
                                    <br/> or drop a line in the form at the 
                                    <span class="fancy">
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