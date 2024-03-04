import { motion } from 'framer-motion'
import React from 'react'

const Genesis = () => {
  
  return (
    <div 
    

    className='bg-[#11160b] pt-28 lg:px-24 relative '>        
        <motion.h1
        initial={{
          opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }} className=' font-[InstrumentSerif]  space-y-8 text-center text-4xl md:text-5xl m-0 py-8 font-bold uppercase text-[#fbf9ef]'> 
            Genesis
        </motion.h1>
        <div className='flex flex-col overflow-hidden lg:flex-row text-[#fbf9ef] gap-4 items-center justify-center'>
            <motion.img
             initial={{
              x:-200,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{ 
                x:0,
                opacity:1 
            }}
            viewport={{once:true}}

            className='w-[32rem] pt-8 md:pt-0 xl:w-[44rem] rounded-lg h-auto bg-center' src="/genesis.jpg" alt="" />
            
            <motion.div
            initial={{
              x:200,
              opacity:0
             }}
             transition={{
              duration:1.2,
             }}
             whileInView={{ 
              x:0,
              opacity:1 
             }}
             viewport={{once:true}}
              
            className='p-4 px-4'>
              <p className=' text-lg text-[#fbf9ef] flex flex-col '>SAI’s cofounder is an international development professional who worked with international donor agencies across the World for over two decades before confounding SAI together with his spouse. During one of his assignments from World Bank Group, he revisited the same area of Odisha where he was once in-charge of a donor agency and had supported local NGOs for the development work by giving millions of Rupees in grants. He was awestruck as no physical structures were maintained, and the local community was in no better situation. All the good work during his time had gone to waste. He also realized the futility of grant/charity model.    </p>
              <p className=' text-lg  text-[#fbf9ef]  flex flex-col ' >Though he didn’t belong to Odisha he left his WBG assignment and started living with the tribal community in Naxalite dominated area to test and validate the alternative development model. The concept was simple. He partnered with the tribal community to promote agroforestry on small/marginal farmers’ degraded land to generate additional income. After the harvest, the farmers returned the investment, and shared some part of the profits made which was used to hire local rural youth to train and support these farmers. The model not only supported the farmers in getting additional food and income, but it also reclaimed degraded land and addressed global warming by planting trees.    </p>

              <p className=' text-lg  text-[#fbf9ef] pt-2'>
              The model is validated at national and international levels, and now SAI is replicating this model in different African countries by partnering with local NGOs and young entrepreneurs, mentoring, and supporting them.
              </p>
            </motion.div>

           

        </div>
       
          
    </div>
  )
}

export default Genesis