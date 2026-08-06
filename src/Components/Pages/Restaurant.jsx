import { useRestaurant } from "../../Utils/RestaurantContext";
import RestaurantGrid from "./LandingPage/RestaurantGrid";

const Restaurant = () => {

  const resData = useRestaurant()
  
  const FILTERS = ["All", "Top Rated", "Fast Delivery", "Offers", "Premium"];


  return (
    <section className="bg-white pt-25 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

       

        {/* Filters */}

        <div
          className="flex gap-3 overflow-x-auto pb-5 scrollbar-hide">
          {FILTERS.map((filter, index) => (
            <button
              key={filter}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition

              ${
                index === 0
                  ? "bg-slate-900 text-white"
                  : "bg-orange-50 text-orange-600 hover:bg-orange-100"
              }`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Restaurant Cards */}

        <div>
          <RestaurantGrid restaurants={resData}/>
        </div>
      </div>
    </section>
  );
}

export default Restaurant