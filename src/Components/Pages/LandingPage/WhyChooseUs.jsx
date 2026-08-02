import {
  Zap,
  ChefHat,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";


const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Hot and fresh meals delivered to your doorstep in under 30 minutes.",
    value: "20 min",
    label: "Average Delivery",
  },

  {
    icon: ChefHat,
    title: "Expert Chefs",
    description:
      "Partnered with top-rated chefs and premium restaurants.",
    value: "500+",
    label: "Professional Chefs",
  },

  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Every restaurant goes through strict quality checks.",
    value: "99%",
    label: "Customer Satisfaction",
  },

  {
    icon: HeartHandshake,
    title: "Loved By Foodies",
    description:
      "Thousands of customers trust us for their daily cravings.",
    value: "1M+",
    label: "Happy Customers",
  },
];


const WhyChooseUs = () => {

  return (

    <section className="bg-orange-50/50 py-24">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">


          <p
          className="
          text-sm
          uppercase
          tracking-widest
          font-semibold
          text-orange-500
          "
          >
            Why Savory
          </p>


          <h2
          className="
          mt-4
          text-4xl
          md:text-5xl
          font-black
          text-slate-900
          "
          >
            More Than Just Food Delivery
          </h2>


          <p
          className="
          mt-5
          text-slate-600
          text-lg
          "
          >
            We combine technology, quality restaurants,
            and passionate chefs to create a premium dining
            experience.
          </p>


        </div>





        {/* Cards */}


        <div
        className="
        mt-16
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
        >


        {
          FEATURES.map((feature,index)=>{


            const Icon = feature.icon;


            return (

              <div

              key={index}

              className="
              group
              rounded-[32px]
              bg-white
              border
              border-slate-100
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "

              >



                {/* Icon */}

                <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                text-orange-600
                transition
                group-hover:bg-orange-500
                group-hover:text-white
                "
                >

                  <Icon size={30}/>

                </div>





                {/* Number */}

                <div className="mt-8">


                  <h3
                  className="
                  text-3xl
                  font-black
                  text-slate-900
                  "
                  >
                    {feature.value}
                  </h3>


                  <p
                  className="
                  text-sm
                  font-semibold
                  text-orange-500
                  "
                  >
                    {feature.label}
                  </p>


                </div>




                {/* Text */}


                <h4
                className="
                mt-6
                text-xl
                font-bold
                text-slate-900
                "
                >

                  {feature.title}

                </h4>


                <p
                className="
                mt-3
                text-sm
                leading-6
                text-slate-600
                "
                >

                  {feature.description}

                </p>



              </div>

            )

          })
        }


        </div>


      </div>


    </section>

  );

};


export default WhyChooseUs;