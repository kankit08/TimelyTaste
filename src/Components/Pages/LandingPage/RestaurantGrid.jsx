import { useRestaurant } from "../../../Utils/RestaurantContext";
import RestaurantCard from "./RestaurantCard";

const FILTERS = ["All", "Top Rated", "Fast Delivery", "Offers", "Premium"];

const RestaurantGrid = () => {
  const resData = useRestaurant();
  

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

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

          <button
            className="hidden md:block rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-orange-500 hover:text-white transition">
            View All Restaurants
          </button>
        </div>

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

        <div
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {resData?.slice(0,4).map((restaurant) => (
            <RestaurantCard key={restaurant.resId} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantGrid;
