import { NavLink } from "react-router-dom";
import { useRestaurant } from "../../Utils/RestaurantContext";
import RestaurantGrid from "./LandingPage/RestaurantGrid";

const FeaturedRestaurants = () => {
  const resData = useRestaurant()

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
         <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Discover Places
            </p>

            <h2
              className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
              Featured Restaurants
            </h2>

            <p
              className="mt-4 max-w-xl text-slate-600">
              Explore handpicked restaurants offering exceptional food and
              unforgettable experiences.
            </p>
          </div>

            <NavLink to='restaurant'>
                <button
            className="hidden md:block rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-orange-500 hover:text-white transition">
            View All Restaurants
          </button>
            </NavLink>
         
        </div>

        {/* View All Button */}

        <RestaurantGrid
          restaurants={resData.slice(0, 4)}
        />

      </div>
    </section>
  );
};

export default FeaturedRestaurants;