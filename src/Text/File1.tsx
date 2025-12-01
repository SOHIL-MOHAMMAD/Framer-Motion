// basic text animation
import {motion} from "framer-motion"
const File1 = () => {
  const text = "hello world";
  const character = text.split("")
  return (
    <div className="flex h-screen justify-center items-center tracking-widest bg-black">
      {character.map((chat,idx)=>(
        <motion.span
        className="text-7xl text-white font-bold"
        key={idx}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay: idx * 0.05}}>
          {chat}
        </motion.span>
      ))}
    </div>
  )
}

export default File1
 // practice this again and again

  