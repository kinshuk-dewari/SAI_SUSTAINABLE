import React from 'react'
import Banner from '../components/Banner'
import Fearures from '../components/Fearures'
import Testimonials from '../components/Testimonials'

import AboutUs from './AboutUs'
import OurImpact from './OurImpact'
import SDGoals from './SDGoals'
import OtherBooks from './OtherBooks'
import Review from './Review'
import MapChart from '../components/MapChart'
import LocomotiveScroll from 'locomotive-scroll';
const Home = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Banner/>
      <AboutUs/>      
      <OurImpact/>      
      <SDGoals/>
      <OtherBooks />
      <Review /> 
      <MapChart/>   
      <Fearures /> 
      <Testimonials />


    </div>
  )
}

export default Home