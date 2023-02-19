import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SingleText = ({ children }) => {
    const boxVariant = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    };
    const [ref, inView] = useInView({ threshold: .4 });
    
    const control = useAnimation();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    return (
      <Box
        as={motion.div}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transitionDuration={1}
      >
        {children}
      </Box>
    );
  };

  export default SingleText