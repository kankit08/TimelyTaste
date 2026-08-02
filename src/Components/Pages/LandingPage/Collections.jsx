import { ArrowRight } from "lucide-react";


const COLLECTIONS = [
  {
    title: "Luxury Dining",
    description: "Premium restaurants & fine dining experiences",
    count: "80+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },

  {
    title: "Chef Specials",
    description: "Exclusive dishes crafted by top chefs",
    count: "120+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  },

  {
    title: "Weekend Cravings",
    description: "Perfect meals for your weekend mood",
    count: "60+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
  },

  {
    title: "Healthy Living",
    description: "Fresh, nutritious and delicious meals",
    count: "45+ Restaurants",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  },
];


const Collections = () => {

  return (

    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Heading */}

        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Explore
            </p>


            <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
              Curated Collections
            </h2>


            <p className="mt-4 text-slate-600 max-w-xl">
              Discover handpicked food experiences,
              trending restaurants and exclusive dining spots.
            </p>

          </div>


          <button className="hidden md:flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition">

            View All

            <ArrowRight size={18}/>

          </button>


        </div>



        {/* Cards */}


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {
            COLLECTIONS.map((item,index)=>(


              <div

                key={index}

                className="
                group
                relative
                h-[420px]
                overflow-hidden
                rounded-[32px]
                cursor-pointer
                shadow-lg
                "

              >


                {/* Image */}

                <img

                  src={item.image}

                  alt={item.title}

                  className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "

                />



                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  "
                />



                {/* Content */}

                <div
                  className="
                  absolute
                  bottom-0
                  p-6
                  text-white
                  "
                >


                  <h3 className="
                  text-2xl
                  font-black
                  ">
                    {item.title}
                  </h3>


                  <p className="
                  mt-2
                  text-sm
                  text-white/80
                  ">
                    {item.description}
                  </p>


                  <div className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  ">


                    <span className="
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    ">
                      {item.count}
                    </span>



                    <button
                    className="
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-slate-900
                    transition
                    group-hover:bg-orange-500
                    group-hover:text-white
                    "
                    >

                      Explore

                      <ArrowRight size={15}/>

                    </button>


                  </div>


                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default Collections;