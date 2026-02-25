import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import footerlogo from "../assets/footerlogos.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700">
          {/* Contact */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4 uppercase">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-slate-300 mt-1" />
                <p>1234 Heaven Street, Beverly Hill OldYork – United States</p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-slate-300 mt-1" />
                <p>
                  (800) 0123 4567 890 <br />
                  (800) 0987 654 321
                </p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-slate-300 mt-1" />
                <p>
                  support1@demo.com <br />
                  support2@demo.com
                </p>
              </div>
            </div>
          </div>

          {/* Payment & Shipping */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4 uppercase">
              Payment & Shipping
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Terms of Use",
                "Payment Methods",
                "Shipping Guide",
                "Locations We Ship To",
                "Estimated Delivery Time",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-slate-100 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Tags */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4 uppercase">
              Product Tags
            </h3>

            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Women",
                "Men",
                "Fashion",
                "Mobile",
                "Tablet",
                "Electronics",
                "Furniture",
                "Laptop",
                "Smartphone",
                "Gifts",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full
                             border border-slate-700
                             hover:bg-slate-800 hover:text-slate-100
                             cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Opening Time */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4 uppercase">
              Opening Time
            </h3>

            <p className="mb-2 text-sm">Monday – Friday : 9:00 – 22:00</p>
            <p className="mb-2 text-sm">Saturday : 10:00 – 24:00</p>
            <p className="mb-6 text-sm">Sunday : 12:00 – 24:00</p>

            <h4 className="text-slate-100 font-semibold mb-3 uppercase">
              Payment Methods
            </h4>

            <img src={footerlogo} alt="payment" className="h-6 opacity-80" />
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-slate-500">
          © 2025 <span className="text-slate-200 font-medium">FieldThemes</span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
