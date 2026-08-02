import {
  Smartphone,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";


const FEATURES = [
  "Exclusive app-only offers",
  "Track your delivery live",
  "Save favourite restaurants",
];


const AppBanner = () => {

  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div
        className="
        relative
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-br
        from-orange-500
        via-orange-600
        to-red-500
        px-8
        py-12
        lg:px-16
        lg:py-16
        "
        >


          {/* Background Blur */}

          <div
          className="
          absolute
          -top-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-white/20
          blur-3xl
          "
          />


          <div
          className="
          absolute
          bottom-0
          left-0
          h-60
          w-60
          rounded-full
          bg-yellow-300/20
          blur-3xl
          "
          />





          <div
          className="
          relative
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
          >



            {/* LEFT */}

            <div
            className="
            text-white
            "
            >


              <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/20
              backdrop-blur-md
              px-4
              py-2
              text-sm
              font-semibold
              "
              >

                <Smartphone size={18}/>

                Mobile Experience

              </div>




              <h2
              className="
              mt-6
              text-4xl
              md:text-5xl
              font-black
              leading-tight
              "
              >

                Your favourite food,
                <br/>

                one tap away

              </h2>




              <p
              className="
              mt-5
              max-w-lg
              text-white/80
              text-lg
              leading-8
              "
              >

                Download the TimelyTaste app and enjoy
                faster ordering, exclusive rewards,
                and personalized recommendations.

              </p>




              {/* Features */}


              <div
              className="
              mt-8
              space-y-4
              "
              >

              {
                FEATURES.map((item,index)=>(

                  <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  "
                  >

                    <CheckCircle2
                    size={20}
                    className="text-yellow-300"
                    />

                    <span
                    className="
                    text-white/90
                    "
                    >
                      {item}
                    </span>


                  </div>

                ))
              }

              </div>




              {/* Buttons */}


              <div
              className="
              mt-10
              flex
              flex-wrap
              gap-4
              "
              >


                <button
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-6
                py-4
                font-bold
                text-slate-900
                hover:scale-105
                transition
                "
                >

                  <span className="text-2xl">
                    ▶
                  </span>

                  Google Play

                </button>



                <button
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/30
                bg-white/10
                px-6
                py-4
                font-bold
                text-white
                backdrop-blur
                hover:bg-white/20
                transition
                "
                >

                  App Store

                  <ArrowRight size={18}/>

                </button>


              </div>




            </div>





            {/* RIGHT PHONE */}


            <div
            className="
            relative
            flex
            justify-center
            "
            >


              {/* Phone */}

              <div
              className="
              relative
              h-[520px]
              w-[260px]
              rounded-[45px]
              border-[8px]
              border-slate-900
              bg-white
              shadow-2xl
              overflow-hidden
              rotate-6
              "
              >


                <div
                className="
                h-full
                w-full
                bg-slate-50
                "
                >


                  <img
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500"
                  alt="Food App"
                  className="
                  h-full
                  w-full
                  object-cover
                  "
                  />

                </div>


              </div>





              {/* Rating Card */}


              <div
              className="
              absolute
              left-0
              bottom-20
              rounded-3xl
              bg-white
              p-5
              shadow-2xl
              "
              >


                <div
                className="
                flex
                items-center
                gap-2
                "
                >

                  <Star
                  size={18}
                  className="
                  fill-yellow-400
                  text-yellow-400
                  "
                  />

                  <span
                  className="
                  font-bold
                  text-slate-900
                  "
                  >

                    4.9 Rating

                  </span>


                </div>


                <p
                className="
                mt-1
                text-sm
                text-slate-500
                "
                >

                  Loved by foodies

                </p>


              </div>



            </div>



          </div>


        </div>


      </div>


    </section>

  );

};


export default AppBanner;