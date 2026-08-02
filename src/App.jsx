import './App.css'
import {ResAPIData} from "./Utils/RestaurantContext"
import Footer from './Components/Pages/Footer'
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import Navbar from './Components/Pages/Navbar'


const App = () => {
  return (
    <div>
      <ResAPIData>
      <Navbar/>
      <LandingPage/>
      <Footer/>
      </ResAPIData>
    </div>
  )
}

export default App
