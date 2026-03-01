// import { useContext } from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { addToCartItem } from "../../api/cartApi";

const ProductCard = ({ product, onQuickView }) => {
  const handleAddToCart = async () => {
    try {
      await addToCartItem(product.id, 1);
      alert("Added to cart");
    } catch (error) {
      console.error("Add to cart error", error);
      alert("Failed to add item");
    }
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded overflow-hidden group
      transition-all duration-300 ease-in-out
      hover:-translate-y-2 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative h-52 p-2 flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* QUICK VIEW */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute opacity-0 translate-y-4
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
          border border-white text-white px-4 py-2 text-xs
          flex items-center gap-2 hover:bg-[#4e97fd]"
        >
          <FaEye />
          QUICK VIEW
        </button>
      </div>

      {/* INFO / ADD TO CART */}
      <div className="relative h-20 overflow-hidden">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center
          transition-all duration-300
          group-hover:opacity-0 group-hover:-translate-y-2"
        >
          <h4 className="text-sm text-gray-700">{product.name}</h4>
          <p className="mt-1 text-lg font-semibold text-[#95a9c5]">
            ₹{product.price}
          </p>
        </div>

        <div
          className="absolute inset-0 flex justify-center items-center
          opacity-0 translate-y-6
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300"
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#4e97fd] text-white py-3 text-sm font-medium
            flex items-center justify-center gap-2 hover:bg-[#3b82f6]"
          >
            <FaShoppingCart />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
