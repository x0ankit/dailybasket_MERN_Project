import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

  const currency = import.meta.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setisSeller] = useState(false);
  const [showUserLogin, setshowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

// Fetch All Products

  const fetchProducts = async()=>{
    setProducts(dummyProducts)
  }

  // Add Product to Cart

  const addToCart=(itemId)=>{
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
      cartData[itemId]+=1;
    }else{
      cartData[itemId]=1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart")
  }
  

  // Update Cart Item to Quantity
  const updateCartItems=(itemId,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success('Cart Updated')
  }


  // Remove Products from Cart

  const removeFromCart=(itemId)=>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] -= 1;
      if(cartData[itemId]=== 0){
        delete cartData[itemId];
      }
    }
    toast.success("Removed From Cart")
    setCartItems(cartData);
  }


  useEffect(()=>{
    fetchProducts()
  },[])

  const value = { navigate, user, setUser, setisSeller, isSeller,showUserLogin,setshowUserLogin,products,currency,addToCart,updateCartItems,removeFromCart,cartItems,searchQuery,setSearchQuery};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
