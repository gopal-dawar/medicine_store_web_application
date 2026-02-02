import React from "react";
import { blogs } from "../../data/blogdata";

const NewBlogs = () => {
  return (
    <div className="w-full ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-semibold tracking-wide mb-2">NEW BLOGS</h2>

        {/* Line */}
        <div className="relative w-full">
          {/* Gray full width line */}
          <div className="w-full h-[3px] bg-gray-300"></div>
          {/* Green accent line */}
          <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((blog) => (
          <div key={blog.id} className="bg-white">
            {/* Image */}
            <div className="relative overflow-hidden h-48 p-2">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300  object-cover"
              />

              {/* Date Badge */}
              <div className="absolute bottom-4 left-4 bg-emerald-600 text-white text-xs px-3 py-2 text-center leading-tight">
                <p className="font-semibold">{blog.date}</p>
                <p>{blog.month}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-semibold leading-snug mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBlogs;
