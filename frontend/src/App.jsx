import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import ProductCategory from "./pages/productCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import Contact from "./pages/Contact";

import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          
          <Route path="/add-address" element={<AddAddress />} />
          
          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/my-orders" element={<MyOrders />} />
          </Route>

          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
