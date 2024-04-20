import React from 'react';
import "./AboutMe.css";
import "./stars.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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

function Images({ text, url, info, text2, text3 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 3], [-300, 100]);
  return (
    <section className='section1'>
      <div ref={ref}>
        <img className='img1' src={url} alt={text} />
      </div>
      <motion.h2 className='h21'style={{ y }}>
        {text}
        <br/>
        <motion.h4 className='h41'style={{ y }}><br/>{info}<br/><br/>{text2}<br/><br/>{text3}</motion.h4>
        
      </motion.h2>
      
    </section>
  );
}

const AboutMe = () => {
  return (
<html className='html1'>
  <body className='body1'>
      <div id="stars"></div>
      <div id="stars1"></div>
      <div id="stars2"></div>
    <div className="AboutMe">
      
    {data.map((img) => (
      <Images key={img.id} text={img.text} info={img.info} text2={img.text2} text3={img.text3} url={img.url} />
    ))}
    <br/><br/>
    <footer>
      <h4>Let's talk</h4>
        <p>Wanna get in touch or talk about a project?<br/> Wanna use my API? <br/> Feel free to contact me via email at <span className="fancy"><a href="mailto:warrenpeterson141414@gmail.com">warrenpeterson141414@gmail.com</a></span><br/> or drop a line in the form at the <span className="fancy"><a href="/contact">contact page</a></span></p>
        
    </footer>
    <br/><br/>
    </div>
    
  </body>
  </html>
  )
}

export default AboutMe
