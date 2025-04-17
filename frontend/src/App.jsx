import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast'


const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <div>

      {isSellerPath ? null : <Navbar/>} 

    <Toaster/>

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px"}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  );
};

export default App;
