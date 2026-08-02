import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    review:
      "Absolutely love the experience! Deliveries are always on time, the food arrives hot, and discovering new restaurants has never been easier.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 5,
    review:
      "The UI feels premium and the restaurant recommendations are surprisingly accurate. It's become my go-to food delivery app.",
  },
  {
    id: 3,
    name: "Ananya Kapoor",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    review:
      "Exclusive app offers, smooth ordering, and real-time delivery tracking make every order effortless. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Loved by Food Lovers
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Thousands of happy customers trust us for fast
            delivery, premium restaurants, and unforgettable
            dining experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {TESTIMONIALS.map((user) => (

            <div
              key={user.id}
              className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Quote */}

              <div className="flex justify-between">

                <div className="flex gap-1">

                  {Array.from({ length: user.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                <Quote
                  size={32}
                  className="text-orange-200 group-hover:text-orange-500 transition"
                />

              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-slate-600">
                "{user.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={user.image}
                  alt={user.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-slate-900">
                    {user.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;