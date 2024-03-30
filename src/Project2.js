import React from "react";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import AwesomeButton from "react-awesome-button";
//import 'react-awesome-button/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';


const Project2 = () => {
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
                <a href="/project3" className="next">
                    <span>Shoe Fly</span>
                    <em></em>
                </a>
                
                <a href="/project1" className="prev">
                    <span>Player Projector</span>
                    <em></em>
                </a>
                <div className="ribbon">
                    <a target="_blank" href="https://github.com/warrengslice" title="Follow on Github">FOLLOW ON GITHUB</a>
                </div>
            </div>
            <div className="content pages" id="portfolio">
                <article itemScope="" itemType="https://schema.org/WebSite" className="centered">
                    <div className="wrapper">
                        <header>
                            <h1 itemProp="name">The Cradle of Existence</h1>
                            <h2 itemProp="description">Front-End Spring Boot Author Website with Custom Artwork, Video, and Containers</h2>
                            <link itemProp="image" href="https://i.imgur.com/dzIbOob.jpeg"/>
                            <meta itemProp="url" content="https://thecradleofexistence.com/"/>
                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                <meta itemProp="name" content="Warren Peterson"/>
                                <meta itemProp="address" content="USA"/>
                                <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                                <meta itemProp="jobTitle" content="Full-Stack Web Developer, UI/UX Javascript"/>
                            </span>
                            <div className="share">
                                <awesome-button  type="external" target="_blank" href="https://thecradleofexistence.com/" title="Visit the website">
                                    <a href="https://thecradleofexistence.com/" className="aws-btn aws-btn--external aws-btn--orange aws-btn--visible">
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
                                <awesome-button className="s_" title="Share it on Twitter" type="twitter" size="icon" via="warrengfoofight" text="The Cradle of Existence Author Website | UI/UX Javascript Specialist | Warren Peterson" sharer="">
                                    <a href="/elements/" className="aws-btn aws-btn--twitter aws-btn--visible">
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
                                    <a href="/elements/" className="aws-btn aws-btn--facebook aws-btn--visible">
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
                                <a target="_blank" className="hidden" href="https://github.com/WarrenGSlice/DDN-300">Source Code</a>.
                            </small>
                            <AwesomeSlider  height="x58%" bullets="true" animation="fallAnimation">
                                <item source="https://i.imgur.com/dzIbOob.jpeg"></item>
                                <item source="https://i.imgur.com/NNxI3a3.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/edhuu1S.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/MPAPlbs.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/RDaV5us.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>

                                <item source="https://i.imgur.com/n2vFKOt.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/00ekHOl.jpeg" style={{height:"75%", marginTop:"7.2%" }}></item>
                                <item source="https://i.imgur.com/Rpt0yXM.png" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/gLzTgNs.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item> 

                                <item source="https://i.imgur.com/JClz5A0.png" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/nBhlSSN.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/uPw8eXx.png" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/gWDnDb1.png" style={{height:"79.5%", marginTop:"5.5%" }}></item>

                                <item source="https://i.imgur.com/YkRY9a7.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>
                                <item source="https://i.imgur.com/Rf8fsFf.jpeg" style={{height:"79.5%", marginTop:"5.5%" }}></item>        
                            </AwesomeSlider>
                        </div>
                        <div className="text">
                            <div className="section">
                                <h2>About this project</h2>
                                <hr/>
                                <p>Project developed as a contractor for Jay Jellum the author. </p>
                                <p>The Author Website was built using the <strong>Spring Boot Framework</strong> with <strong>Java</strong> and is entirely front-end.
                                </p>
                                <p>At this project I was the solo UI/UX developer and reported frequent updates to the author for approval. The main challenge was to create a platform that the author could launch
                                    his book from once it was completed. Since the book is not finished, the website was to serve as a visual representation of the book and the author.
                                </p>
                                <p>The author did not currently have artwork for his book. My solution was to put my own custom artwork into the site to show how his future artwork could be displayed.
                                </p>
                                <p>If you would look to view more of my custom artwork, go to: 
                                    <span className="fancy">
                                    <a href="https://www.behance.net/warrenpeterson3"> https://www.behance.net/warrenpeterson3</a>
                                    </span>
                                </p>
                                <p>
                                    The initial design stages of this application were developed by creating wireframes with <strong>AxureRP</strong>.
                                </p>
                                <h3>Conclusion</h3>
                                <p>All of the custom artwork and custom containers on this site were sketched, designed, and created by (Warren Peterson).
                                </p>
                                <p> I am most proud of the use of custom containers on this web application. Using <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong>, I was able to
                                    create backgrounds and containers for this web site that are visually pleasing and complement each other. The purpose of the website 
                                    is to solely showcase creativity. 
                                </p>
                            </div>
                            <div className="section">
                                <h2>Technical Sheet</h2>
                                <p>Code technologies I got involved with while working on this project.</p><hr/>
                                <ul itemProp="keywords">
                                    <li>UI/UX Architecture</li>
                                    <li>Java</li>
                                    <li>Spring Boot</li>
                                    <li>Animations</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe After Effects</li>
                                    <li>AxureRP 10</li>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>Javascript</li>
                                    <li>Custom Artwork</li>
                                    <li>Custom Containers</li>
                                    <li>CI/CD & Autodeployment</li>
                                    <li>Front-End</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>Resources</h2><hr/>
                                <ul>
                                    <li>Download the Front-End source code at 
                                        <span className="fancy">
                                            <a target="_blank" title="Author Website" href="https://github.com/WarrenGSlice/DDN-300">https://www.github.com/warregnslice/DDN-300</a>
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

export default Project2;