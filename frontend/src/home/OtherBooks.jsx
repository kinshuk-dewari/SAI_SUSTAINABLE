import React from 'react'
import BookCards from '../components/BookCards';

const Content = ({title,desc})=>{
  return <li className=' my-8 first:mt-0 last:mb-0 mx-auto flex flex-col item-center justify-between'>
    <div>
      <h3 className=' text-lg font-bold uppercase md:text-3xl'>{title} </h3>      
      {
        desc.split("*").map(d=><p key={d} className='font-medium  text-black/75 pb-2 text-base xl:text-lg'> <span className='rounded-full inline-block w-2 h-2 bg-[#5A8D51]'></span> {d} </p>)
      }
    </div>
  </li>
}

const OtherBooks = () => {
   
  return (
    <div className=' mt-28 px-4 lg:px-24 '>       
       
        
        <div className="qualification__container container flex items-center justify-center ">
            

            <div className="qualification__sections" >                                 
                    
                <div className="qualification__content qualification__active" data-content id="education">
                  <h1 className='text-4xl md:text-5xl font-[InstrumentSerif] text-center m-0 py-8 font-bold uppercase text-[#00261e]'> 
                      Works with
                  </h1>
                      {/* <!-- ================QUALIFICATION  1======================== --> */}
                        <div className="qualification__data">
                          <Content title="Farmer" desc="Training: Access to finance,quality inputs & machinery. *Technical hand holding, logistics & transportation.* Direct Market Access with digital bank payment."/>

                          <div>
                            <span className="qualification__rounder"><span className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span></span>
                            <span className="qualification__line"></span>
                          </div>

                        </div>
                      

                        {/* <!-- ================QUALIFICATION  2======================== --> */}
                        <div className="qualification__data">
                          <div></div>

                          <div>
                            <span className="qualification__rounder"><span className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span></span>
                            <span className="qualification__line"></span>
                          </div>

                          <Content title="Landless and Migrants" desc="Daily wages adjacent to their villages.* Employment through the value chain. *Training and Empolyment as CRP"/>            

                        </div>                     

                      
                        
                        {/* <!-- ================QUALIFICATION  3======================== --> */}
                        <div className="qualification__data">  
                        <Content title="Investors and Government" desc="High impact along with clear deliverables. *Addressing 5 Sustainable,Development Goals. *Self-Suctainable model."/>                
                            
                            <div>
                              <span className="qualification__rounder"><span className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span></span>
                              <span className="qualification__line"></span>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                          <div></div>

                          <div>
                            <span className="qualification__rounder"><span className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span></span>
                            <span className="qualification__line"></span>
                          </div>

                          <Content title="Technical Experts" desc="Direct access to small marginal framers. *Opportunity to research and development."/>
                        </div>

                        <div className="qualification__data">
                          <Content title="Replication Partners" desc="Pro-bano Training and Mentoring Support. *Long term partnership for multplier impact. *Leveraging networks adn connections"/>

                          <div>
                            <span className="qualification__rounder "> 
                              <span className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span>
                            </span>  
                            <span className="qualification__line"></span>                          
                          </div>

                        </div>

                        

                        {/* <!-- ================QUALIFICATION  2======================== --> */}
                        <div className="qualification__data">
                          <h1 className='text-4xl md:text-5xl font-[InstrumentSerif] text-right m-0 py-8 font-bold uppercase text-[#00261e]'> 
                              Delivers to
                          </h1>
                          

                          <div>
                            <span className="qualification__rounder">
                            <span  className='rounded-full inline-block w-3 h-3 bg-white translate-x-1 -translate-y-[.145rem]  z-50'></span>
                            </span>                            
                          </div>

                          <Content title="Industry/ Market/Consumer" desc="Climate resilient supply chain within core zone. *Image building with local community. *Quality Control through joint technical monitoring."/>            

                        </div>     

                </div> 
                
            </div>

        </div>          
          
    </div>
  )
}

export default OtherBooks