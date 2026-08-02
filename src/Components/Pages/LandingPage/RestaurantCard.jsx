import { Heart, Clock3, MapPin, Star, ArrowRight } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {

  const {
    resImage,
    resName,
    resRating,
    resCuisines,
    resLocation,
    resPrice,
    resDeliveryTime,
  } = restaurant;

  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      {/* Image Section */}
      <div>
        <div className="relative h-72 overflow-hidden">
          <img
            src={resImage}
            alt={resName}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Offer Badge */}

          {/* <div className="absolute top-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
          offer
        </div> */}

          {/* Favorite */}

          <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur hover:bg-white transition">
            <Heart size={20} className="text-slate-700 hover:text-red-500" />
          </button>

          {/* Rating */}

          <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-lg">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            {resRating}
          </div>
        </div>

        {/* Content */}

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-500 transition">
                {resName}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {resCuisines.join(" , ").slice(0,27)}
              </p>
            </div>
          </div>

          {/* Tags */}

          {/* <div
          className="mt-5 flex flex-wrap gap-2">
          {
            restaurant.tags?.map((tag,index)=>(

              <span
              key={index}
              className="
              rounded-full
              bg-orange-50
              px-3
              py-1
              text-xs
              font-semibold
              text-orange-600
              "
              >

                {tag}

              </span>

            ))
          }
        </div> */}

          {/* Info */}

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm">
              <Clock3 size={15} />
              <span>{resDeliveryTime} mins</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm max-w-[170px]">
              <MapPin size={15} className="shrink-0" />
              <span className="truncate">{resLocation}</span>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Cost for two</p>

              <p className="font-bold text-slate-900">₹ {resPrice}</p>
            </div>

            <button className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
              View Menu
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
