const Loader = () => {
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 
    flex justify-center items-center 
    bg-black/30 backdrop-blur-sm z-100"
    >
      <div className="flex justify-center items-center gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`circle circle-${i}`}>
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
