import Categories from "./Categories"
// import Collections from "./Collections"
import Hero from "./Hero"
import RestaurantCard from "./RestaurantCard"
import RestaurantGrid from "./RestaurantGrid"
import WhyChooseUs from "./WhyChooseUs"
import AppBanner from "./AppBanner"
import Testimonials from "./Testimonials"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        {/* <Collections/> */}
        <Categories/>
        <RestaurantCard/>
        <RestaurantGrid/>
        <WhyChooseUs/>
        <AppBanner/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage