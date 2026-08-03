import { Outlet } from "react-router-dom"
import Navbar from "../Components/Pages/Navbar"
import Footer from "../Components/Pages/Footer"
import { ResAPIData } from "../Utils/RestaurantContext"

const MainLayout = () => {
  return (
    <div>
        <ResAPIData>
            <Navbar />
            <Outlet/>
            <Footer/>
        </ResAPIData>
    </div>
  )
}

export default MainLayout