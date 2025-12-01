//character level Animation

import {motion} from "framer-motion"

const File2 = () => {
  const text = "O BOLO TARA RARA  "
  const containerVariants = {
    hidden : {opacity : 0},
    visible: {opacity:1,
      transition:{
        staggerChildern:0.05,
        delayChildren:0.9
      }
    }
  }
  const characterVariants={
    hidden:{opacity:0,y:20},
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:100
      }
    }
  }
  return (
    <div>
      <motion.div
      className="flex justify-center bg-black items-center h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible">
        { text.split("").map((char,idx)=>(
          <motion.span 
          className="text-white text-5xl"
          key={idx} 
          variants={characterVariants}
          style={{display:"inline-block"}}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default File2
