// components/PageTransition.js
import { useState, useEffect } from "react";
import { AnimatePresence, m, LazyMotion, domAnimation, motion, backInOut } from "framer-motion";

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
    <LazyMotion features={domAnimation}>
    <m.div
      initial={{ x: '100%', opacity: 1 }}
      animate={{ x: 0, opacity: 1, transition:backInOut }}
      exit={{ x: '-100%', opacity: 0, transition: { duration: 0.1} }}
      transition={{ delay: 0, duration: .5 }}
      /*initial={{ x: '100%', opacity: 1 }}
                    animate={{ x: 0, opacity: 1, transition:backInOut }}
                    exit={{ x: '-100%', opacity: 0, transition: { duration: 0.1} }}
                    transition={{ delay: 0, duration: .5 }}*/
    >
      {children}
    </m.div>
    {nextPageVisible && (
      <m.div
      initial={{ x: '100%', opacity: 1 }}
                    animate={{ x: 0, opacity: 1, transition:backInOut }}
                    exit={{ x: '-100%', opacity: 0, transition: { duration: 0.1} }}
                    transition={{ delay: 0, duration: .5 }}
      >
        {/* Render the next page content here */}
        {/* Example: <NextPageContent /> */}
      </m.div>
    )}
  </LazyMotion>
  );
};

export default PageTransition;