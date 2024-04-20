import React, { useRef } from 'react';
import "./AboutMe.css";
import "./stars.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const data = [
    {
      id: 1,
      text: "about me.",
      info: "I am a full-stack web developer and UI/UX specialist.",
      text2:"",
      url: "https://i.imgur.com/3tW8PaI.png",
    },
    {
      id: 2,
      text: "Where I live",
      info: "The silicon forest isn't quite Silicon Valley, but growing up here surrounded by the beautiful mountains and forest has always given me a sense of wonder, When I wasn't exploring the natural beauty of the area, I was working on my degree in Software Development.",
      text2: "I graduated college with a degree in Software Development in 2024. I hope to land a developer job anywhere in the world and begin a new journey.",       
      url: "https://imageio.forbes.com/i-forbesimg/media/lists/places/portland-or_416x416.jpg?format=jpg&height=416&width=416&fit=bounds",
    },
    {
      id: 3,
      text: "Other Hobbies",
      info: "Beyond coding, I have a love for research and learning - I love fantasy football, tracking player stats and doing player projections. I enjoy accumulating data on prospects to discover what the data says about the prospect of success in the NFL.",
      text2: "These days, I also enjoy researching the stock market and using a mix of fundamental and technical analysis to determine what should be bought and when it should be bought.",
      text3: "Combing through data always excites me because you never know what the information will end up revealing. This is something I've enjoyed doing in all aspects of my life.",
      url: "https://images.pexels.com/photos/9464856/pexels-photo-9464856.jpeg",
    },
    {
      id: 4,
      text: "My Future",
      info: "My career goals are to work as a developer for the rest of my life. I'm willing to work from home, or anywhere in the world. My goal is to create the highest quality work that improves our modern world. ",
      text2: "If you are interested in my services, please feel free to reach out and start a conversation.",
      text3: "",
      url: "https://cdn.inprnt.com/thumbs/6d/0c/6d0c7b9cea6f9d9b04d8bff1d2df8470.jpg",
    },
  ];

const Warren = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <><motion.div className='progress-bar' style={{scaleX}} />

        <div className='html1'>
        
          <div className='body1'>
              <div id="stars"></div>
              <div id="stars1"></div>
              <div id="stars2"></div>
              <div className="AboutMe">
              

                  <section className='section1'>
                      <div>
                          <img className='img1' src="https://i.imgur.com/3tW8PaI.png" alt="about me." />
                      </div>
                      <motion.h2 className='h21' style={{}}>
                          <p>about me.</p>
                          <br />

                      </motion.h2>
                      <motion.h4 className='h41' style={{}}>
                          <br />
                          <p>I am <strong>Warren Peterson</strong>, a full-stack web developer and UI/UX specialist.</p>
                          <br /><br />
                          <p></p>
                          <br /><br />
                          <p></p>
                      </motion.h4>
                  </section>

                  <section className='section1'>
                      <div>
                          <img className='img2' src="https://imageio.forbes.com/i-forbesimg/media/lists/places/portland-or_416x416.jpg?format=jpg&height=416&width=416&fit=bounds"
                              alt="Where I Live" />
                      </div>
                      <motion.h2 className='h22' style={{}}>
                          <p>Where I Live</p>
                          <br />
                          <motion.h4 className='h42' style={{}}>
                          <br />
                          <p>
                              The silicon forest isn't quite Silicon Valley,
                              but growing up here surrounded by the beautiful mountains and forest has always given me a sense of wonder,
                              When I wasn't exploring the natural beauty of the area, I was working on my degree in Software Development.
                          </p>
                          <br /><br />
                          <p>
                              I graduated college with a degree in Software Development in 2024.
                              I hope to land a developer job anywhere in the world and begin a new journey.
                          </p>
                          <br /><br />
                          <p></p>
                      </motion.h4>
                      </motion.h2>
                      
                  </section>

                  <section className='section1'>
                      <div>
                          <img className='img3' src="https://images.pexels.com/photos/9464856/pexels-photo-9464856.jpeg"
                              alt="Other Hobbies" />
                      </div>
                      <motion.h2 className='h23' style={{}}>
                          <p>Other Hobbies</p>
                          <br />
                          <motion.h4 className='h43' style={{}}>
                          <br />
                          <p>
                              Beyond coding, I have a love for research and learning - I love fantasy football, tracking player stats and doing player projections.
                              I enjoy accumulating data on prospects to discover what the data says about the prospect of success in the NFL.
                          </p>
                          <br />
                          <p>
                              These days, I also enjoy researching the stock market and using a mix of fundamental and technical analysis to determine
                              what should be bought and when it should be bought.
                          </p>
                          <br />
                          <p>
                              Combing through data always excites me because you never know what the information will end up revealing.
                              This is something I've enjoyed doing in all aspects of my life.
                          </p>
                      </motion.h4>
                      </motion.h2>
                      
                  </section>

                  <section className='section1'>
                      <div>
                          <img className='img4' src="https://cdn.inprnt.com/thumbs/6d/0c/6d0c7b9cea6f9d9b04d8bff1d2df8470.jpg"
                              alt="My Future" />
                      </div>
                      <motion.h2 className='h24' style={{}}>
                          <p>My Future</p>
                          <br />
                          <motion.h4 className='h44' style={{}}>
                          <br />
                          <p>
                              My career goals are to work as a developer for the rest of my life. I'm willing to work from home, or anywhere in the world.
                              My goal is to create the highest quality work that improves our modern world.
                          </p>
                          <br /><br />
                          <p>
                              If you are interested in my services, please feel free to reach out and start a conversation.
                          </p>
                          <br /><br />
                          <p>
                          </p>
                      </motion.h4>
                      </motion.h2>
                      
                  </section>

                  <br /><br />
                  <footer>
                      <h4>Let's talk</h4>
                      <p>Wanna get in touch or talk about a project?<br /> Wanna use my API? <br /> Feel free to contact me via email at_
                          <span className="fancy"><a href="mailto:warrenpeterson141414@gmail.com">warrenpeterson141414@gmail.com</a></span>
                          <br /> or drop a line in the form at the <span className="fancy"><a href="/contact">contact page</a></span>
                      </p>
                  </footer>
                  <br /><br />
              </div>

          </div>
      </div></>
  )
}

export default Warren
