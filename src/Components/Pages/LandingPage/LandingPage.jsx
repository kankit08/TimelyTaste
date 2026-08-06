import Categories from "./Categories"
// import Collections from "./Collections"
import Hero from "./Hero"
import WhyChooseUs from "./WhyChooseUs"
import AppBanner from "./AppBanner"
import Testimonials from "./Testimonials"
import FeaturedRestaurants from "../FeaturedRestaurants"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        {/* <Collections/> */}
        <Categories/>
        <FeaturedRestaurants/>
        <WhyChooseUs/>
        <AppBanner/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage