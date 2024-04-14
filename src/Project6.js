import React from "react";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import AwesomeButton from "react-awesome-button";
//import 'react-awesome-button/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Project6 = () => {
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
                <a href="/project7" className="next">
                    <span>Minesweeper</span>
                    <em></em>
                </a>
                
                <a href="/project5" className="prev">
                    <span>Maze Solver</span>
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
                            <h1 itemProp="name">Tasty Bites</h1>
                            <h2 itemProp="description">Built using react.js with custom Web Components, Javascript, and SQL. Full-Stack Retaurant Web Application. </h2>
                            <link itemProp="image" href="https://i.imgur.com/2SYp49O.png"/>
                            <meta itemProp="url" content="https://tasty-bites.herokuapp.com/"/>
                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                <meta itemProp="name" content="Warren Peterson"/>
                                <meta itemProp="address" content="USA"/>
                                <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                                <meta itemProp="jobTitle" content="Full-Stack Web Developer, UI/UX Javascript"/>
                            </span>
                            <div className="share">
                                <awesome-button  type="external" target="_blank" href="https://tasty-bites.herokuapp.com/" title="Visit the website">
                                    <a href="https://tasty-bites.herokuapp.com/" className="aws-btn aws-btn--external aws-btn--orange aws-btn--visible">
                                        <span className="aws-btn__container">
                                            <span className="aws-btn__wrapper">
                                                <span className="aws-btn__content" dataStatus="Success!" dataLoading="Wait for it ..">
                                                    <span>
                                                        <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" dataIcon="facebook,">
                                                            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff">
                                                            </path>
                                                        </svg> 
                                                        <span>Visit the website</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </awesome-button>
                                <awesome-button className="s_" title="Share it on X" type="twitter" size="icon" via="warrengfoofight" text="Tasty Bites | UI/UX Javascript Specialist | Warren Peterson" sharer="">
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
                                <a target="_blank" className="hidden" href="https://github.com/WarrenGSlice/CST-326">Source Code</a>.
                            </small>
                            <AwesomeSlider  height="x58%" bullets="true" animation="cubeAnimation">
                                <item source="https://i.imgur.com/2SYp49O.png" style={{height:"100%", marginTop:"0.0%" }}></item>
                                <item source="https://i.imgur.com/QzCgHzM.png" style={{height:"100%", marginTop:"0%" }}></item>
                                <item source="https://i.imgur.com/WMtJjqs.png" style={{height:"81%", marginTop:"5%" }}></item>
                                <item source="https://i.imgur.com/SHzYDuh.png" style={{height:"78%", marginTop:"6%" }}></item>
                                
                                <item source="https://imgur.com/SxrsKAo.png" style={{height:"80%", marginTop:"5.5%" }}></item>
                            </AwesomeSlider>
                        </div>
                        <div className="text">
                        <div className="section">
                                <h2>About this project</h2>
                                <hr/>
                                <p>The Tasty Bites Web Application was built using <strong>react.js</strong> with <strong>express.js</strong>, <strong>node.js </strong>and is a Full-Stack Application.
                                </p>
                                <p>At this project I was the lead team member in an Agile Team and also the Lead UI/UX Design and Development of the application. The main challenge was to create a good looking Restaurant Front and 
                                    a fully functioning back-end that could allow employees to change items and prices in the menu. The Back-End uses <strong>PostgreSQL </strong> with <strong>axios </strong> 
                                    to handle the <strong>REST APIs</strong> used for menu adjustment. The Back-End Database also can allow the user to change users and their roles. Only admins have access to the 
                                    menu adjustment dashboard. This is kept secure using <strong>BCrypt.js</strong> and <strong>jsonwebtoken</strong>.
                                </p>
                                <p>This Web Application also uses <strong>email.js</strong> for sending messages. The passwords are salted in the database with BCrypt.
                                </p>
                                <p>To log into the system and check it out, you can use 
                                    <span className="fancy">
                                        <a href="https://tasty-bites.herokuapp.com/Login">lowercase john john</a>
                                    </span>
                                </p>
                                <p>
                                    Building this application required daily meetings, task assignment, delegation, debugging and unit testing. 
                                    Each meber of the team had different tasks and specialities. The Login System and Menu Management System uses
                                     CRUD Operations.
                                </p>
                                <h3>Conclusion</h3>
                                <p>I Designed the overall website concept / UI DESIGN, implemented responsive home & menu pages. Deployed on Heroku. Created custom Logo's and Graphics.
                                </p>
                                <p> The purpose of this web application was create a restaurant home page that any restaurant would be happy to use.
                                </p>
                            </div>
                            <div className="section">
                                <h2>Technical Sheet</h2>
                                <p>Code technologies I got involved with while working on this project.</p><hr/>
                                <ul itemProp="keywords">
                                    <li>UI/UX Architecture</li>
                                    <li>UI/UX Design</li>
                                    <li>UI/UX Animations</li>
                                    <li>Node.js</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>CRUD</li>
                                    <li>RestAPI</li>
                                    <li>BCrypt</li>
                                    <li>jsonwebtoken</li>
                                    <li>Email.js</li>
                                    <li>Axios</li>
                                    <li>Logs</li>
                                    <li>PostgreSQL</li>
                                    <li>Sequelize</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Front-End</li>
                                    <li>Back-End</li>
                                    <li>Full-Stack</li>
                                    <li>Web Components</li>
                                    <li>React Hooks & Props</li>
                                    <li>Responsive Web Design</li>
                                    <li>CI/CD & Autodeployment</li>
                                    <li>HTML5 - semantic, video, canvas</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>Resources</h2><hr/>
                                <ul>
                                    <li>Download the Full-Stack source code at  
                                        <span className="fancy">
                                            <a target="_blank" title="Tasty Bites" href="https://github.com/WarrenGSlice/CST-326">  _Source Code Link</a>
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
                            <p>Wanna get in touch or talk about a project?<br/> Feel free to contact me via email at <span className="fancy"><a href="mailto:warrenpeterson141414@gmail.com">warrenpeterson141414@gmail.com</a></span><br/> or drop a line in the form at the <span className="fancy"><a href="/contact">contact page</a></span></p>
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

export default Project6;