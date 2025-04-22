import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-300 rounded-lg bg-white p-3 w-full h-full flex flex-col justify-between transition hover:shadow-md cursor-pointer"
    >
      {/* Image */}
      <div className="w-full flex justify-center items-center aspect-square overflow-hidden mb-2">
        <img
          src={product.image[0]}
          alt={product.name}
          className="object-contain max-h-full group-hover:scale-105 transition"
        />
      </div>

      {/* Details */}
      <div className="text-gray-500 text-sm flex-1 flex flex-col justify-between">
        <p>{product.category}</p>
        <p className="text-gray-800 font-semibold text-base md:text-lg truncate">{product.name}</p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array(5).fill('').map((_, i) => (
            <img
              key={i}
              className="w-3 md:w-4"
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt="rating"
            />
          ))}
          <p className="ml-1 text-xs">(4)</p>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-end mt-3">
          <div className="text-primary font-medium text-sm md:text-base">
            {currency}{product.offerPrice}
            <span className="text-gray-400 text-xs line-through ml-1">
              {currency}{product.price}
            </span>
          </div>

          <div onClick={(e) => e.stopPropagation()} className="text-primary">
            {!cartItems[product._id] ? (
              <button
                onClick={() => addToCart(product._id)}
                className="flex items-center gap-1 px-2 py-1 border border-primary rounded-md bg-primary/10 hover:bg-primary/20 text-xs md:text-sm"
              >
                <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4" />
                Add
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-primary/20 px-2 py-1 rounded-md text-sm">
                <button onClick={() => removeFromCart(product._id)} className="px-2">-</button>
                <span>{cartItems[product._id]}</span>
                <button onClick={() => addToCart(product._id)} className="px-2">+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;