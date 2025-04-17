import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast'
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import ProductCategory from "./pages/productCategory";
import ProductDetails from "./pages/ProductDetails";


const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()
  return (
    <div>

      {isSellerPath ? null : <Navbar/>} 
      {showUserLogin ? <Login/>:null}

    <Toaster/>

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px"}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/products/:category" element={<ProductCategory/>}/>
          <Route path="/products/:category/:id" element={<ProductDetails/>}/>

        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  );
};

export default App;
