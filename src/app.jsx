import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './assets/Navbar/Navbar'
import Home from './assets/Home/Home'
import Blackbanner from './assets/BlackBanner/Blackbanner'
import Footer from './assets/Footer/Footer'
import Productivity from './assets/productivity/Productivity'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <Blackbanner/>
     <Productivity/>
     {/* <Footer/> */}
    </>
  )
}
