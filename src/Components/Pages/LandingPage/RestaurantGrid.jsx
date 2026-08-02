import RestaurantCard from "./RestaurantCard";


const RESTAURANTS = [
  {
    id:1,
    name:"The Spice Pavilion",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",

    rating:4.8,
    offer:"30% OFF",

    cuisine:
      "North Indian • Mughlai",

    tags:[
      "Bestseller",
      "Fast Delivery"
    ],

    time:"25 min",

    location:"Gurugram",

    price:"₹800 for two"
  },


  {
    id:2,

    name:"La Bella Italia",

    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",

    rating:4.7,

    offer:"20% OFF",

    cuisine:
      "Italian • Pizza • Pasta",

    tags:[
      "Premium",
      "Wood Fired"
    ],

    time:"30 min",

    location:"Cyber City",

    price:"₹900 for two"
  },


  {
    id:3,

    name:"Sushi House",

    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",

    rating:4.9,

    offer:"FREE DELIVERY",

    cuisine:
      "Japanese • Sushi",

    tags:[
      "Trending",
      "Chef Special"
    ],

    time:"35 min",

    location:"Golf Course Road",

    price:"₹1200 for two"
  },


  {
    id:4,

    name:"Burger Theory",

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",

    rating:4.6,

    offer:"BUY 1 GET 1",

    cuisine:
      "American • Burgers",

    tags:[
      "Popular",
      "Quick Bite"
    ],

    time:"20 min",

    location:"Sector 29",

    price:"₹600 for two"
  }

];



const FILTERS = [
  "All",
  "Top Rated",
  "Fast Delivery",
  "Offers",
  "Premium"
];



const RestaurantGrid = () => {


  return (

    <section className="bg-white py-20">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Header */}

        <div className="
        flex
        flex-col
        md:flex-row
        md:items-end
        md:justify-between
        gap-6
        mb-10
        ">


          <div>


            <p className="
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-orange-500
            ">
              Discover Places
            </p>


            <h2
            className="
            mt-3
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
            "
            >

              Featured Restaurants

            </h2>


            <p
            className="
            mt-4
            max-w-xl
            text-slate-600
            "
            >

              Explore handpicked restaurants offering
              exceptional food and unforgettable experiences.

            </p>


          </div>


          <button
          className="
          hidden
          md:block
          rounded-full
          border
          border-slate-200
          px-6
          py-3
          font-semibold
          text-slate-700
          hover:bg-orange-500
          hover:text-white
          transition
          "
          >

            View All Restaurants

          </button>


        </div>




        {/* Filters */}


        <div
        className="
        flex
        gap-3
        overflow-x-auto
        pb-5
        scrollbar-hide
        "
        >

          {
            FILTERS.map((filter,index)=>(

              <button

              key={filter}

              className={`
              whitespace-nowrap
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition

              ${
                index===0
                ?
                "bg-slate-900 text-white"
                :
                "bg-orange-50 text-orange-600 hover:bg-orange-100"
              }

              `}

              >

                {filter}

              </button>

            ))
          }

        </div>





        {/* Restaurant Cards */}


        <div
        className="
        mt-8
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        "
        >

          {
            RESTAURANTS.map((restaurant)=>(

              <RestaurantCard

              key={restaurant.id}

              restaurant={restaurant}

              />

            ))
          }


        </div>



      </div>


    </section>

  );

};


export default RestaurantGrid;