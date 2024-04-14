import React from "react";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import AwesomeButton from "react-awesome-button";
//import 'react-awesome-button/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';


const Project3 = () => {
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
                    <span>Portfolio WebApp</span>
                    <em></em>
                </a>
                
                <a href="/project2" className="prev">
                    <span>The Cradle of Existence</span>
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
                            <h1 itemProp="name">Shoe Fly</h1>
                            <h2 itemProp="description">Full-Stack Order Management Web Application uses Spring Boot & Spring Security Framework</h2>
                            <link itemProp="image" href="https://i.imgur.com/D7wzSrg.jpeg"/>
                            <meta itemProp="url" content="https://shoefly.herokuapp.com/"/>
                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                <meta itemProp="name" content="Warren Peterson"/>
                                <meta itemProp="address" content="USA"/>
                                <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                                <meta itemProp="jobTitle" content="Full-Stack Web Developer, UI/UX Javascript"/>
                            </span>
                            <div className="share">
                                <awesome-button  type="external" target="_blank" href="https://shoefly.herokuapp.com/" title="Visit the website">
                                    <a href="https://shoefly.herokuapp.com/" className="aws-btn aws-btn--external aws-btn--orange aws-btn--visible">
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
                                <awesome-button className="s_" title="Share it on X" type="twitter" size="icon" via="warrengfoofight" text="Shoe Fly Order Management Web Application | UI/UX Javascript Specialist | Warren Peterson" sharer="">
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
                                <a target="_blank" className="hidden" href="https://github.com/WarrenGSlice/CLC-Project-for-CST-339">Source Code</a>.
                            </small>
                            <AwesomeSlider  height="x58%" bullets="true" animation="foldOutAnimation">
                                <item source="https://i.imgur.com/D7wzSrg.jpeg"></item>
                                <item source="https://i.imgur.com/LHSi2oz.png" style={{height:"98%", marginTop:"0.5%" }}></item>
                                <item source="https://i.imgur.com/xlub9yc.png" style={{height:"82%", marginTop:"5%" }}></item>
                                <item source="https://i.imgur.com/zgivl1e.png" style={{height:"45%", marginTop:"15.5%" }}></item>
                                <item source="https://i.imgur.com/x8l6ff5.png" style={{height:"63%", marginTop:"9.5%" }} value="Search Orders"title="Search Orders"></item>

                                <item source="https://i.imgur.com/l8e8aLO.png" style={{height:"70.5%", marginTop:"8%" }}></item>
                                <item source="https://i.imgur.com/0qUhb0r.png" style={{height:"70.5%", marginTop:"8%" }}></item>
                                <item source="https://i.imgur.com/F8Or0KP.png" style={{height:"87.5%", marginTop:"3.75%" }}></item>
                                <item source="https://i.imgur.com/8htFQGN.png" style={{width:"72%", marginLeft:"14%" }}></item>     
                            </AwesomeSlider>
                        </div>
                        <div className="text">
                            <div className="section">
                                <h2>About this project</h2>
                                <hr/>
                                <p>Project developed as a student at Grand Canyon University. </p>
                                <p>The Shoe Fly Order Management Web Application was built using the <strong>Spring Boot Framework</strong> with <strong>Java</strong> and is a Full-Stack Application.
                                </p>
                                <p>At this project I was the product owner in an Agile Team and also the Lead UI/UX developer. The main challenge was to create a good looking Interface and A
                                    fully functioning back-end that could handle an order management system. The Back-End using a <strong>Spring JDBC CRUD Repository SQL Database System </strong>to handle the orders.
                                </p>
                                <p>This Web Application also uses <strong>Spring Security</strong> and <strong>OAUTH</strong> to keep the site secure. OAUTH restricts users from viewing the <strong>REST APIs</strong> & Dashboard Page. <strong>BCrypt</strong> salts the passwords.
                                </p>
                                <p>Due to Changes with the database provider since deployment, Viewing the log in system can be accomplished by watching the video at: 
                                    <span className="fancy">
                                        <a href="https://www.github.com/WarrenGSlice/CLC-Project-for-CST-339/"> Click Here and Scroll Down for Video</a>
                                    </span>
                                </p>
                                <p>
                                    Building this application required daily meetings, task assignment and delegation, debugging and unit testing. The Login System and Order Management System uses
                                     CRUD Operations.
                                </p>
                                <h3>Conclusion</h3>
                                <p>Designed the overall website concept / UI, implemented responsive home & product pages. Deployed on Heroku.
                                </p>
                                <p> The purpose of this web application was to implement CRUD operations while keeping the site secure using OAUTH.
                                </p>
                            </div>
                            <div className="section">
                                <h2>Technical Sheet</h2>
                                <p>Code technologies I got involved with while working on this project.</p><hr/>
                                <ul itemProp="keywords">
                                    <li>UI/UX Architecture</li>
                                    <li>Java</li>
                                    <li>Spring Boot</li>
                                    <li>Spring Security</li>
                                    <li>Spring Data JDBC</li>
                                    <li>Thymeleaf</li>
                                    <li>CRUD</li>
                                    <li>REST API</li>
                                    <li>Swagger UI</li>
                                    <li>Postman</li>
                                    <li>Heroku</li>
                                    <li>OAUTH</li>
                                    <li>Logs</li>
                                    <li>BCrypt</li>
                                    <li>Agile Methodolgy</li>
                                    <li>Search Algo</li>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>MySql</li>
                                    <li>Custom Video Logo</li>
                                    <li>CI/CD & Autodeployment</li>
                                    <li>Full-Stack</li>
                                    <li>Front-End</li>
                                    <li>Back-End</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>Resources</h2><hr/>
                                <ul>
                                    <li>Download the Front-End source code at  
                                        <span className="fancy">
                                            <a target="_blank" title="Shoe Fly" href="https://github.com/WarrenGSlice/CLC-Project-for-CST-339">  _Source Code Link</a>
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

export default Project3;