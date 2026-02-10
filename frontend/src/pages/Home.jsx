import React from "react";

const Home = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<NewBlogs />} />
      <Route path="/features" element={<FeatureSection />} />
      <Route
        path="/contact"
        element={<div className="p-10">Contact Page</div>}
      />

      {/* DASHBOARD ROUTES */}
    </>
  );
};

export default Home;
