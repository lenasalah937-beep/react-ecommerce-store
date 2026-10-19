import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import "./index.css";
import Home from "./page/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import CartPage from "./page/cart/CartPage";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/ScrollTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchPage from "./page/SearchPage";
import Favorites from "./page/favorites/favorites";

function App() {
  const location = useLocation();
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderradius: "5px",
            padding: "14px",
          },
        }}
      />

      <ScrollTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
