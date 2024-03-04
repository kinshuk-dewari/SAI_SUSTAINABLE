import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageFooter from './components/PageFooter'
import LocomotiveScroll from 'locomotive-scroll';
function App() { 

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      <div className='min-h-screen scroll-smooth'>
        <Outlet />
      </div>
      <PageFooter/>
    </>
  )
}

export default App
 