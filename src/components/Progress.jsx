import { useScroll, motion } from 'framer-motion';
import React from 'react';


const Progress = () => {
    const {scrollYProgress} = useScroll();
    return ( 
        <motion.div className=' progress_top' style={{scaleX:scrollYProgress, zIndex:"1000"}}/>
     );
}
 
export default Progress;