import {motion} from "framer-motion"

const Button = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-950">
     <motion.button
     className="w-34 h-20 bg-blue-600 rounded-tr-3xl rounded-bl-3xl font-bold text-xl text-gray-200 rounded-tl-lg rounded-br-lg"
     whileHover={{scale:1.1,rotate:1}}
     whileTap={{scale:0.9}}>click here</motion.button>
    </div>
  )
}

export default Button
