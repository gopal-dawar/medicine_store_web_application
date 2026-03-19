import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaTwitter,
  FaRupeeSign,
} from "react-icons/fa";
import { FiUser, FiGlobe } from "react-icons/fi";
import { getCurrentUser } from "../../api/userApi";
import ProfileModal from "../model/ProfileModal";
import { useNavigate } from "react-router-dom";

const Nav1 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchcurrentuserdata = async () => {
      try {
        const re = await getCurrentUser();
        setName(re.data.name);
        setUser(re.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchcurrentuserdata();
  }, []);

  return (
    <>
      <div className="bg-slate-900 text-slate-400 text-sm">
        <div
          className="max-w-7xl mx-auto flex justify-between items-center
                     px-4 py-2 border-b border-slate-700"
        >
          <div className="flex items-center gap-3">
            {[
              FaFacebookF,
              FaTwitter,
              FaGooglePlusG,
              FaRss,
              FaPinterestP,
              FaLinkedinIn,
            ].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full hover:bg-slate-800
                           hover:text-slate-100 cursor-pointer transition"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div
              className="flex items-center gap-2 cursor-pointer
                         hover:text-slate-100 transition"
            >
              <FiGlobe className="text-base" />
              <span>English</span>
            </div>

            <span className="text-slate-600">|</span>

            <div className="flex items-center gap-1 cursor-pointer hover:text-slate-100 transition">
              <FaRupeeSign size={12} />
              INR
            </div>

            <span className="text-slate-600">|</span>

            <div
              onClick={() => {
                if (name) {
                  setOpen(true);
                } else {
                  navigate("/login");
                }
              }}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700
             hover:bg-slate-800 hover:text-slate-100
             cursor-pointer transition"
            >
              <FiUser size={14} />
              <span>{name || "Guest"}</span>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal show={open} onClose={() => setOpen(false)} user={user} />
    </>
  );
};

export default Nav1;
