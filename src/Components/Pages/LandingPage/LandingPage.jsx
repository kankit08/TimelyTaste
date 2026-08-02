import Categories from "./Categories"
// import Collections from "./Collections"
import Hero from "./Hero"
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
        <RestaurantGrid/>
        <WhyChooseUs/>
        <AppBanner/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage