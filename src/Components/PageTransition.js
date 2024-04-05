// components/PageTransition.js
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const [nextPageVisible, setNextPageVisible] = useState(false);

  useEffect(() => {
    // Simulate the loading of the next page content
    const timeout = setTimeout(() => {
      setNextPageVisible(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);


  return (
    <AnimatePresence >
    <motion.div
      initial={{ opacity: 1, x: "-50%" }} // Initially, the page is hidden and positioned to the left
      animate={{ opacity: 1, x: 0 }} // Animate the opacity and x position to reveal the page from left to right
      exit={{ opacity: 1, x: "50%" }} // Animate the opacity and x position to hide the page to the right
      transition={{ duration: .5 }} // Set the transition duration to 0.5 seconds
    >
      {children}
    </motion.div>
    {nextPageVisible && (
      <motion.div
      initial={{ opacity: 1, x: "50%" }} // Initially, the page is hidden and positioned to the left
      animate={{ opacity: 1, x: 0 }} // Animate the opacity and x position to reveal the page from left to right
      exit={{ opacity: 1, x: "-50%" }} // Animate the opacity and x position to hide the page to the right
      transition={{ duration:0.5 }} // Set the transition duration to 0.5 seconds
      >
        {/* Render the next page content here */}
        {/* Example: <NextPageContent /> */}
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default PageTransition;