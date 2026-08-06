import RestaurantCard from "./RestaurantCard";

const RestaurantGrid = ({restaurants}) => {

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.resId} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantGrid;
