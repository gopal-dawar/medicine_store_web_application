import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import footerlogo from "../assets/footerlogos.png";
const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-gray-400 pt-14">
      <div className="max-w-7xl mx-auto px-6">
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
       
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Contact Us
            </h3>
            <div className="relative w-full mb-5">
            
              <div className="w-full h-[3px] bg-gray-300"></div>
            
              <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4 border p-2 py-3">
              <FaMapMarkerAlt className="text-emerald-500 mt-1 text-3xl" />
              <p>
                1234 Heaven Stress, Beverly Hill OldYork - United State of Lorem
              </p>
            </div>

            <div className="flex items-start gap-4 mb-4 border p-2 py-3">
              <FaPhoneAlt className="text-emerald-500 mt-1" />
              <p>
                (800) 0123 4567 890
                <br />
                (800) 0987 654 321
              </p>
            </div>

            <div className="flex items-start gap-4 border p-2 py-3">
              <FaEnvelope className="text-emerald-500 mt-1" />
              <p>
                support1@demo.com
                <br />
                support2@demo.com
              </p>
            </div>
          </div>

          {/* PAYMENT & SHIPPING */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Payment & Shipping
            </h3>
            <div className="relative w-full mb-5">
              {/* Gray full width line */}
              <div className="w-full h-[3px] bg-gray-300"></div>
              {/* Green accent line */}
              <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
            </div>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">Term of Use</li>
              <li className="hover:text-white cursor-pointer">
                Payment Methods
              </li>
              <li className="hover:text-white cursor-pointer">
                Shipping Guide
              </li>
              <li className="hover:text-white cursor-pointer">
                Locations We Ship To
              </li>
              <li className="hover:text-white cursor-pointer">
                Estimated Delivery Time
              </li>
            </ul>
          </div>

          {/* PRODUCT TAGS */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Product Tags
            </h3>
            <div className="relative w-full mb-5">
              {/* Gray full width line */}
              <div className="w-full h-[3px] bg-gray-300"></div>
              {/* Green accent line */}
              <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Women",
                "Man",
                "Fashion & Beauty",
                "Mobile",
                "Tablet",
                "Electronic",
                "Shopping",
                "Furniture",
                "Laptop",
                "Smart phone",
                "Gifts",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="border border-gray-600 px-3 py-1 text-sm hover:border-emerald-500 hover:text-white cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* OPENING TIME */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Opening Time
            </h3>

            <p className="mb-2">Monday - Friday......9:00 - 22:00</p>
            <p className="mb-2">Saturday........10:00 - 24:00</p>
            <p className="mb-6">Sunday..........12:00 - 24:00</p>

            <h4 className="text-white font-semibold mb-3 uppercase">
              Payment Methods
            </h4>

            <div className="flex gap-3">
              <img src={footerlogo} alt="paypal" className="h-6" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-gray-500">
          Copyright © 2025{" "}
          <span className="text-white font-medium">FieldThemes</span>. All Right
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
