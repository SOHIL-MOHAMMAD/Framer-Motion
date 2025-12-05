import {motion, useScroll, useSpring} from 'framer-motion'
const Scroll1 = () => {

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
    restDelta:0.001
  });

  return (
    <div className='bg-gray-900 text-white overflow-hidden'>
      <motion.div
      className='fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50'
      style={{scaleX}}/>
      <div className='max-w-4xl mx-auto px-4 py-20 flex flex-col gap-40'>
        <div className='h-screen flex items-center justify-center'>
          <h1 className='text-5xl  font-bold text-center'>
            Scroll Down <br />
            <span className='text-blue-400 text-2xl'>too see magic</span>
          </h1>
        </div>

        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.8}}
        className='bg-gray-800 p-10 rounded-xl border border-gray-700'
        >
          <h2 className='text-3xl font-bold mb-4'>Fade Up Animation</h2>
          <p className='text-gray-400'>jaise hi ye card screen ke 50% hisse mein aayega , ye niche se upar slide hoga.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }} // Isme animation baar baar chalegi jab bhi scroll karoge
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-blue-900 p-10 rounded-2xl border border-blue-700 ml-auto w-3/4"
        >
          <h2 className="text-3xl font-bold mb-4">Slide from Left</h2>
          <p className="text-blue-200">
            Ye card left side se slide hokar aayega.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-900 p-20 rounded-full flex items-center justify-center aspect-square w-64 mx-auto"
        >
          <h2 className="text-2xl font-bold">Zoom In</h2>
        </motion.div>

        <div className="h-screen flex items-center justify-center">
          <p>End of Page</p>
        </div>
      </div>
    </div>
  )
}

export default Scroll1
