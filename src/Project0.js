import React from "react";
import "./About.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import AwesomeButton from "react-awesome-button";
//import 'react-awesome-button/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Project0 = () => {
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
                <a href="/project0weatherapp" className="next">
                    <span>Weather App</span>
                    <em></em>
                </a>
                
                <a href="/portfolio" className="prev">
                    <span>Portfolio</span>
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
                            <h1 itemProp="name">Software Engineer Intern - AI/ML</h1>
                            <h2 itemProp="description"><strong>Product Manager Accelerator</strong> | Remote | Boston MA<br/> Full-Stack application that utilizes Generative AI to improve resumes.</h2>
                            <link itemProp="image" href="https://i.imgur.com/RJdFOnW.png"/> {/*Main Image*/ }
                            <meta itemProp="url" content="https://resume-builder-frontend-nine.vercel.app/"/>{/*Keep Hidden for now*/}
                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                <meta itemProp="name" content="Warren Peterson"/>
                                <meta itemProp="address" content="USA"/>
                                <meta itemProp="email" content="warrenpeterson141414@gmail.com"/>
                                <meta itemProp="jobTitle" content="Full-Stack Web Developer, UI/UX Javascript"/>
                            </span>
                            <div className="share">
                                {/* Website Linkage, Twitter Share, Facebook Share currently unavailable due to NDA
                                <awesome-button  type="external" target="_blank" href="https://resume-builder-frontend-nine.vercel.app/" title="Visit the website">
                                    <a href="https://resume-builder-frontend-nine.vercel.app/" className="aws-btn aws-btn--external aws-btn--orange aws-btn--visible">
                                        <span className="aws-btn__container">
                                            <span className="aws-btn__wrapper">
                                                <span className="aws-btn__content" dataStatus="Success!" dataLoading="Wait for it ..">
                                                    <span>
                                                        <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" dataIcon="facebook,">
                                                            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff">
                                                            </path>
                                                        </svg> 
                                                        <span>Visit the website-coming soon</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </awesome-button>
                                <awesome-button className="s_" title="Share it on X" type="twitter" size="icon" via="warrengfoofight" text="Fantasy Football Rankings Editor | UI/UX Javascript Specialist | Warren Peterson" sharer="">
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
                                */}
                            </div>
                        </header>
                        <div className="media">
                            <div className="bar" data-src="">
                                <i></i>
                            </div>
                            {/* Source Code area left out due to NDA agreement, maybe put back in if project fails to complete
                            <small>
                                <a target="_blank" className="hidden" href="/project0"></a>.
                            </small>
                            */}
                            <AwesomeSlider  height="x58%" bullets="true" animation="cubeAnimation">
                                <item source="https://i.imgur.com/RJdFOnW.png"></item> 
                                <item source="https://i.imgur.com/lWhdN9l.png"></item> 
                                <item source="https://i.imgur.com/YNfkzlr.png"></item>     
                            </AwesomeSlider>
                        </div>
                        <div className="text">
                            <div className="section">
                                <h2>About this project</h2>
                                <hr/>
                                <p>Project developed as an <strong>Software Engineering Intern at PM Accelerator</strong></p>
                                <p><strong>Generative AI Resume Improvement App</strong> - The <strong>AI/ML</strong> Resume Improvement app is a <strong>react.js</strong> web application built on the <strong>node.js</strong> and <strong>express.js</strong> back-end.
                                </p>
                                <p>
                                    It also utilizes <strong>FastAPI</strong>, <strong>Celery</strong>, & <strong>Redis</strong> to form an asynchronous task queue for back-end request optimization.
                                </p>
                                <p>
                                    The objective of the web application is to suggest and make changes to an uploaded resume, specific to trends, phrases, keywords,
                                     and relevance in the Product Manager Industry.
                                </p>
                                <p>
                                    The chat component connects with <strong>ChatGPT OpenAI API</strong>, that allows for specific prompt engineering, and utilizes <strong>PDFJS</strong> to render changes in a visable and downloadable pdf format.
                                </p>
                                <p>Many integrations are included in this application such as <strong>Google OAuth2.0</strong> for storage security and as part of user management. This applications also includes several microservice back-end integrations.
                                    These include the integration of a relational db, <strong>SQL</strong>, to handle saving and loading past finished resumes. A <strong>Pinecone</strong> vector database to handle embeddings, and also <strong>Colab</strong> as part of the transformational process.
                                </p>
                                <p>At this project I was the lead UI/UX developer as well as back-end engineer for the relational database application and structure along with engineer of many of the integrations. 
                                    The main challenge was to create an application using Generative AI/ML to automate the process of improving a resume using <strong>ChatGPT</strong>. Rather than having to 
                                     copy and paste your resume into ChatGPT and then try many prompts to get the desired result, Our application automates this process in a simple user friendly automated system.
                                     The main idea in this internship was to quickly work together as a team to spin up a minimal viable product that could be demonstrated after a few months. If successful the opportunity 
                                     to create a new start-up would be discussed depending on the marketability and success of the demonstration.
                                </p>
                                <p>I am currently still in progress with this internship and will be finished in Decemeber 2024.
                                </p>
                                <h3>Conclusion</h3>
                                <p>This internship has been a wonderful experience that has helped me gain the confidence I needed to know that I can build anything our minds can think up.
                                    There were so many challenges involved in this internship and I really enjoyed all the strategizing, trial & error, and problem solving.
                                </p>
                                <p> Overall, this was a wonderful opportunity to work with a team of developers and gain some real work experience in a collaborative environment.
                                </p>
                            </div>
                            <div className="section">
                                <h2>Technical Sheet</h2>
                                <p>Code technologies I got involved with while working on this project.</p><hr/>
                                <ul itemProp="keywords">
                                    <li>UI/UX Architecture</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>Node.js</li>
                                    <li>Ajax</li>
                                    <li>Async & Await</li>
                                    <li>Axios</li>
                                    <li>React Hooks & Props</li>
                                    <li>Javascript</li>
                                    <li>Typescript</li>
                                    <li>Pinecone</li>
                                    <li>Generative AI/ML</li>
                                    <li>ChatGPT Open AI API</li>
                                    <li>Python</li>
                                    <li>FastAPI</li>
                                    <li>OAuth2.0</li>
                                    <li>MongoDB</li>
                                    <li>Celery</li>
                                    <li>Redis</li>
                                    <li>Heroku</li>
                                    <li>Vercel</li>
                                    <li>Postman</li>
                                    <li>Uvicorn</li>
                                    <li>PDFJS</li>
                                    <li>Google Colab</li>
                                    <li>Logs</li>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>MySql</li>
                                    <li>CRUD</li>
                                    <li>REST API</li>
                                    <li>CI/CD & Autodeployment</li>
                                    <li>Microservices</li>
                                    <li>Agile Methodolgy</li>
                                    <li>Full-Stack -- Front-End / Back-End</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>Resources</h2><hr/>
                                <ul>
                                    <br/><h4>If you would like to learn more about this project:</h4><br/>
                                    <li>The Front-End code is currently under copyright, please visit PM Accelerator for more information
                                        <span className="fancy">
                                            <a target="_blank" title="Resume App Front-End" href="https://www.pmaccelerator.io/">https://www.pmaccelerator.io/</a>
                                        </span>
                                    </li>
                                    <li>The Back-End code is currently under copyright, please visit PM Accelerator for more information
                                        <span className="fancy">
                                            <a target="_blank" title="Resume App Back-End" href="https://www.pmaccelerator.io/">https://www.pmaccelerator.io/</a>
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
                            <h4>All Information about the Resume App and the internship is protected under copyright, PM Accelerator <strong>© Dr. Nancy Li International.</strong></h4><br/>
                            <p>The information seen here may only be discussed and/or viewed for the purpose of future job opportunities.</p><br/>
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


export default Project0;