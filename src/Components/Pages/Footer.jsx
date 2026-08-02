import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid gap-14 text-center lg:text-left lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">

            <h2 className="text-3xl font-black">
              TimelyTaste<span className="text-orange-500">.</span>
            </h2>

            <p className="mt-6 max-w-md text-slate-400 leading-8 mx-auto lg:mx-0">
              Discover premium restaurants, chef-crafted meals,
              and lightning-fast delivery. Every order is made
              to delight your taste buds.
            </p>

            {/* Newsletter */}

            <div className="mt-8">

              <h3 className="font-semibold text-lg">
                Join our newsletter
              </h3>

              <div className="mt-4 flex flex-col sm:flex-row rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden w-full max-w-md mx-auto lg:mx-0">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-5 py-4 outline-none placeholder:text-slate-500"
                />

                <button className="bg-orange-500 hover:bg-orange-600 px-6 transition">

                  {/* <Send size={18} /> */}

                </button>

              </div>

            </div>

          </div>

          {/* Company */}

          <div flex flex-col items-center lg:items-start>

            <h3 className="font-bold text-lg">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Support */}

          <div flex flex-col items-center lg:items-start>

            <h3 className="font-bold text-lg">
              Support
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>

          {/* Download */}

          <div flex flex-col items-center lg:items-start>

            <h3 className="font-bold text-lg">
              Get the App
            </h3>

            <p className="mt-6 text-slate-400">
              Download our app for a faster ordering experience.
            </p>

            <div className="mt-6 space-y-4 w-full max-w-xs mx-auto lg:mx-0">

              <button className="w-full rounded-2xl bg-white text-slate-900 py-3 font-semibold hover:scale-105 transition">
                ▶ Google Play
              </button>

              <button className="w-full rounded-2xl border border-slate-700 py-3 font-semibold hover:border-orange-500 transition">
                 App Store
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">

          <p className="text-slate-500 text-sm">
            © 2026 TimelyTaste. All rights reserved.
          </p>

          {/* Social */}

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaFacebook/>
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;