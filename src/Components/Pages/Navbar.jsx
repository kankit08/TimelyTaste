import {
  Search,
  ShoppingBag,
  User,
  Menu,
  MapPin,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-amber-500 flex items-center justify-center text-white text-2xl shadow-lg">
              🍽
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight text-white">
                TimelyTaste
              </h2>

              <p className="text-xs text-slate-400 -mt-1">
                Premium Food Delivery
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#"
              className="text-slate-300 hover:text-orange-400 transition font-medium"
            >
              About
            </a>

            <a
              href="#"
              className="text-slate-300 hover:text-orange-400 transition font-medium"
            >
              Restaurants
            </a>

            <a
              href="#"
              className="text-slate-300 hover:text-orange-400 transition font-medium"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-slate-300 hover:text-orange-400 transition font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Location */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition">
              <MapPin className="w-4 h-4 text-orange-400" />

              <span className="text-sm text-white">
                Gurugram
              </span>

              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {/* Search */}
            <button className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
              <Search className="w-5 h-5 text-white" />
            </button>

            {/* Cart */}
            <button className="relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
              <ShoppingBag className="w-5 h-5 text-white" />

              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </button>

            {/* Login */}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              <User size={18} />

              Login
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;