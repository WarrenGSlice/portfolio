import React from "react";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import AwesomeButton from "react-awesome-button";
//import 'react-awesome-button/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Project0wLeaguePage = () => {
    return (

<main id="page-content" className="">
    <section className="current">
        <div>
            <div className="page-control">
                <a className="back-list" href="/portfolio" title="Back to portfolio">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>Back</span>
                </a>
                <a href="/project4" className="next">
                    <span>Portfolio</span>
                    <em></em>
                </a>
                
                <a href="/project0weatherapp" className="prev">
                    <span>Weather App</span>
                    <em></em>
                </a>
                <div className="ribbon">
                    <a target="_blank" href="https://github.com/warrengslice" title="Follow on Github">FOLLOW ON GITHUB</a>
                </div>
            </div>
            <div className="content pages" id="portfolio">
                <div id="stars"></div>
                <article itemScope="" itemType="https://schema.org/WebSite" className="centered">
                    <div className="wrapper">
                        
                        <header>
                            <h1 itemProp="name">Custom Fantasy Football League Page</h1>
                            <h2 itemProp="description">Svelte SCSS Custom Fantasy Football League Page<br/> Implements Sleeper API to show league info in a custom interface</h2>
                            <link itemProp="image" href="https://i.imgur.com/ydFhJwJ.jpeg"/> {/*Main Image*/ }
                            <meta itemProp="url" content="https://weatherapppm-09f3cd6538fb.herokuapp.com/"/>{/*Keep Hidden for now*/}
                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                <meta itemProp="name" content="Warren Peterson"/>
                                <meta itemProp="address" content="USA"/>
                                <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                                <meta itemProp="jobTitle" content="Full-Stack Web Developer, UI/UX Javascript"/>
                            </span>
                            <div className="share">
                                <awesome-button  type="external" target="_blank" href="https://league-page-iota-five.vercel.app/" title="Visit website">
                                    <a href="https://league-page-iota-five.vercel.app/" className="aws-btn aws-btn--external aws-btn--orange aws-btn--visible">
                                        <span className="aws-btn__container">
                                            <span className="aws-btn__wrapper">
                                                <span className="aws-btn__content" dataStatus="Success!" dataLoading="Wait for it ..">
                                                    <span>
                                                        <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" dataIcon="facebook,">
                                                            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff">
                                                            </path>
                                                        </svg> 
                                                        <span> Visit website</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </awesome-button>
                                <awesome-button className="s_" title="Share it on X" type="twitter" size="icon" via="warrengfoofight" text="Custom Fantasy Football League Page | UI/UX Javascript Specialist | Warren Peterson" sharer="">
                                    <a href="https://twitter.com/home" className="aws-btn aws-btn--twitter aws-btn--visible">
                                        <span className="aws-btn__container">
                                            <span className="aws-btn__wrapper">
                                                <span className="aws-btn__content" dataStatus="Success!" dataLoading="Wait for it ..">
                                                    <span>
                                                        <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" dataIcon="facebook,">
                                                            <path d="M49.33,11.051c-1.754,0.778-3.638,1.305-5.617,1.538c2.019-1.209,3.569-3.124,4.3-5.407 c-1.89,1.119-3.98,1.935-6.209,2.372c-1.783-1.899-4.325-3.086-7.14-3.086c-5.4,0-9.775,4.376-9.775,9.776 c0,0.767,0.085,1.514,0.251,2.229c-8.126-0.407-15.331-4.3-20.154-10.215c-0.84,1.444-1.323,3.123-1.323,4.916 c0,3.394,1.727,6.385,4.348,8.14c-1.601-0.052-3.109-0.49-4.427-1.222c-0.001,0.04-0.001,0.083-0.001,0.122 c0,4.738,3.369,8.69,7.843,9.589c-0.819,0.223-1.683,0.342-2.576,0.342c-0.631,0-1.242-0.061-1.838-0.174 c1.243,3.883,4.855,6.709,9.132,6.791c-3.343,2.621-7.56,4.186-12.141,4.186c-0.79,0-1.568-0.045-2.333-0.137 c4.326,2.771,9.466,4.391,14.989,4.391c17.982,0,27.818-14.898,27.818-27.819c0-0.423-0.012-0.847-0.028-1.268 C46.36,14.735,48.016,13.014,49.33,11.051z" fill="#ffffff">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </awesome-button>
                                <awesome-button className="s_" title="Share it on Facebook" type="facebook" size="icon" sharer="">
                                    <a href="https://www.facebook.com/" className="aws-btn aws-btn--facebook aws-btn--visible">
                                        <span className="aws-btn__container">
                                            <span className="aws-btn__wrapper">
                                                <span className="aws-btn__content" dataStatus="Success!" dataLoading="Wait for it ..">
                                                    <span>
                                                        <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" dataIcon="facebook,">
                                                            <path d="M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,4.213-4.213h4.213V2.531 c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z" fill="#ffffff">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </awesome-button>
                            </div>
                        </header>
                        <div className="media">
                            <div className="bar" data-src="">
                                <i></i>
                            </div>
                            <small>
                                <a target="_blank" className="hidden" href="https://github.com/WarrenGSlice/league-page">Source Code</a>.
                            </small>
                            <AwesomeSlider  height="x58%" bullets="true" animation="cubeAnimation">
                                <item source="https://i.imgur.com/6O0sRnw.png"></item> 
                                <item>
                                    <video style={{width:'101.5%', marginRight:'175px'}} preload="auto" autoPlay={true} loop={true} muted={true}>
                                        <source src="https://i.imgur.com/SNN0l01.mp4" type="video/mp4"/>
                                        {/*<source srcSet={require('./images/small-cradle-fast.mp4')} type="video/mp4"/>*/}
                                    </video>
                                </item> 
                            </AwesomeSlider>
                        </div>
                        <div className="text">
                            <div className="section">
                                <h2>About this project</h2>
                                <hr/>
                                <p>Project developed as a fun idea for my long standing Fantasy Football League</p>
                                <p><strong>Custom Fantasy Football League Page</strong> - The <strong>Svelte</strong> fantasy football application built with <strong>react.js</strong>.
                                </p>
                                <p>
                                    The objective of the custom fantasy football app was to quickly create a custom league page that allows the managers in the league to view and interact with all kinds of data from our Sleeper league.
                                </p>
                                <p>This application integrates the API from <strong>Sleeper API</strong> to give the user all sorts of analytical information. This league page was initially developed by Nicholas Melhado and was customized for our specific league.
                                </p>
                                <p>This Project started as a personal project and was then opened up as an open source project that now allows other developers to customize it for their own league.
                                </p>
                                <h3>Conclusion</h3>
                                <p>Although I did not create the main code base for this application, I do understand it and made changes in order to make it work for my league. The other managers in my league really enjoy it because it is much more user friendly than sleeper, 
                                    and makes it much easier to find the information you are looking for without having to switch between the sleeper desktop and sleeper mobile app to find the information. This web app displays all the information perfectly in both mobile and desktop.
                                </p>
                                <p> Overall, it was a simple, fun, and quick project that was an makes the fantasy football experience even more enjoyable.
                                </p>
                            </div>
                            <div className="section">
                                <h2>Technical Sheet</h2>
                                <p>Code technologies I got involved with while working on this project.</p><hr/>
                                <ul itemProp="keywords">
                                    <li>UI/UX Architecture</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Svelte</li>
                                    <li>Javascript</li>
                                    <li>Sleeper API</li>
                                    <li>Heroku</li>
                                    <li>SCSS</li>
                                    <li>HTML5</li>
                                    <li>Front-End</li>
                                    <li>Responsive Web Design</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>Resources</h2><hr/>
                                <ul>
                                    <br/><h4>If you would like to work on this project or make your own version:</h4><br/>
                                    <li>Download the source code at 
                                        <span className="fancy">
                                            <a target="_blank" title="League Page" href="https://github.com/WarrenGSlice/league-page">https://github.com/WarrenGSlice/league-page</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="disqus">
                            <div id="disqus_thread">
                                Comments Coming Soon...
                            </div>
                            <div className="disqus-loader">
                            </div>
                        </div>
                        <footer>
                            <h4>Let's talk</h4>
                            <p>Wanna get in touch or talk about a project?<br/> Wanna use my API? <br/> Feel free to contact me via email at <span className="fancy"><a href="mailto:warrenpeterson141414@gmail.com">warrenpeterson141414@gmail.com</a></span><br/> or drop a line in the form at the <span className="fancy"><a href="/contact">contact page</a></span></p>
                        </footer>
                    </div>
                </article>
                <div id="fb-root">

                </div>
            </div>
        </div>
    </section>
    <section className="loader">
    </section>
</main>

    );
};


export default Project0wLeaguePage;