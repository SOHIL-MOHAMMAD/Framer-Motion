//floting letter on hover

import  { useState } from 'react'
import {motion} from "framer-motion"
const File3 = () => {
  const text = "O BOLO TARA RARA"
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className='flex h-screen justify-center items-center bg-black'>
      <motion.div
      style={{display:"flex", gap: "2px"}}
      onMouseLeave={()=> setHoveredIndex(null)}>
        {text.split("").map((char,i)=>(
          <motion.span
          key={i}
          onMouseEnter={()=>setHoveredIndex(i)}
          animate={hoveredIndex === i ? {y:-10,scale:1.1} : {y:0,scale:1}}
          transition={{type:"spring",stiffness:300}}
          className='inline-block pointer-cursor text-white text-7xl tracking-widest'>
            {char}
          </motion.span>
        ))}
      </motion.div>      
    </div>
  )
}

export default File3
