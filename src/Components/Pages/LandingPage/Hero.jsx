import {
  Search,
  ArrowRight,
  Star,
  Clock3,
  MapPin,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white text-slate-900">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-orange-200 opacity-50 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-amber-200 opacity-50 blur-[160px]" />

      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
              🔥 Premium Food Experience
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Delicious Meals
              <br />
              <span className="text-orange-500">
                Delivered Fresh
              </span>
              <br />
              To Your Door
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Discover handpicked restaurants, premium cuisines,
              and lightning-fast delivery from the best chefs
              around your city.
            </p>

            {/* Search */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <div className="flex flex-1 items-center rounded-2xl border border-slate-200 bg-white px-5 shadow-xl">
                <Search className="text-slate-400" size={20} />

                <input
                  type="text"
                  placeholder="Search restaurants, cuisines..."
                  className="w-full bg-transparent px-4 py-5 text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-5 font-semibold text-white shadow-xl transition hover:scale-105 hover:shadow-2xl">
                Search
                <ArrowRight size={18} />
              </button>

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  1200+
                </h2>

                <p className="mt-1 text-slate-500">
                  Restaurants
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-slate-900">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  4.9
                </h2>

                <p className="mt-1 text-slate-500">
                  Customer Rating
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-slate-900">
                  <Clock3 className="text-orange-500" />
                  20m
                </h2>

                <p className="mt-1 text-slate-500">
                  Avg Delivery
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden justify-center lg:flex">

            <div className="relative">

              {/* White Frame */}
              <div className="rounded-[44px] bg-white p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700"
                  alt="Food"
                  className="h-[620px] w-[520px] rounded-[32px] object-cover"
                />
              </div>

              {/* Pizza Card */}
              <div className="absolute -left-16 top-12 w-60 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl transition hover:-translate-y-2">

                <div className="flex gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200"
                    alt="Pizza"
                    className="h-20 w-20 rounded-2xl object-cover"
                  />

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Margherita Pizza
                    </h3>

                    <p className="text-sm text-slate-500">
                      Italian
                    </p>

                    <p className="mt-2 font-bold text-orange-500">
                      ₹349
                    </p>

                  </div>

                </div>

              </div>

              {/* Delivery Card */}
              <div className="absolute -right-12 bottom-16 w-64 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl transition hover:-translate-y-2">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Delivery
                    </p>

                    <h3 className="font-bold text-slate-900">
                      18 Minutes
                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                    <MapPin className="text-green-600" />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;