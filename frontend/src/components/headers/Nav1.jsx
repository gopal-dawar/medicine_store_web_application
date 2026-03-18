import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { getCurrentUser } from "../../api/userApi";
import ProfileModal from "../model/ProfileModal";

const Nav1 = () => {
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
              <span className="text-base">🇺🇸</span>
              <span>English</span>
            </div>

            <span className="text-slate-600">|</span>

            <div className="cursor-pointer hover:text-slate-100 transition">
              USD
            </div>

            <span className="text-slate-600">|</span>

            <div
              onClick={() => setOpen(true)}
              className="px-3 py-1 rounded-full border border-slate-700
                         hover:bg-slate-800 hover:text-slate-100
                         cursor-pointer transition"
            >
              👤 {name || "Guest"}
            </div>
          </div>
        </div>
      </div>

      <ProfileModal show={open} onClose={() => setOpen(false)} user={user} />
    </>
  );
};

export default Nav1;
