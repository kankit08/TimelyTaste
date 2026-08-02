import { ArrowRight } from "lucide-react";


const CATEGORIES = [
  {
    name: "Italian",
    places: "180+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
  },

  {
    name: "Japanese",
    places: "90+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
  },

  {
    name: "Indian",
    places: "300+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
  },

  {
    name: "Desserts",
    places: "120+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500",
  },

  {
    name: "Healthy",
    places: "70+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },

  {
    name: "Burgers",
    places: "150+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
];


const Categories = () => {

  return (

    <section className="bg-orange-50/40 py-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Header */}

        <div className="mb-10">


          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Browse Food
          </p>


          <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-black
          text-slate-900
          ">
            Explore Categories
          </h2>


          <p className="
          mt-4
          max-w-xl
          text-slate-600
          ">
            Find your favourite cuisine from thousands
            of restaurants around you.
          </p>


        </div>



        {/* Category Grid */}

        <div className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-6
        ">


          {
            CATEGORIES.map((category,index)=>(


              <div

              key={index}

              className="
              group
              rounded-3xl
              bg-white
              border
              border-slate-100
              p-4
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              "

              >


                {/* Image */}


                <div className="
                relative
                overflow-hidden
                rounded-2xl
                h-36
                "
                >

                  <img

                  src={category.image}

                  alt={category.name}

                  className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                  "

                  />


                  <div className="
                  absolute
                  inset-0
                  bg-black/10
                  group-hover:bg-black/20
                  transition
                  "/>


                </div>



                {/* Content */}


                <div className="mt-4">


                  <h3 className="
                  text-lg
                  font-bold
                  text-slate-900
                  group-hover:text-orange-500
                  transition
                  ">
                    {category.name}
                  </h3>


                  <p className="
                  mt-1
                  text-sm
                  text-slate-500
                  ">
                    {category.places}
                  </p>



                  <button
                  className="
                  mt-4
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-semibold
                  text-orange-500
                  "
                  >

                    Explore

                    <ArrowRight
                    size={15}
                    className="
                    transition
                    group-hover:translate-x-1
                    "
                    />

                  </button>


                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );
};


export default Categories;