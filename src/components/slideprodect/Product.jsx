import {
  FaStar,
  FaStarHalfAlt,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext.jsx";
import { useContext } from "react";
import "./slideProduct.css";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const navigate = useNavigate();

  const { CartItem, AddToCart, AddTofavorites, favorites, removefav } =
    useContext(cartContext);
  const isInCart = CartItem.some((i) => i.id === item.id);

  const handleAddToCart = () => {
    AddToCart(item);

    toast.success(
      <div className="toast-cover">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-con">
          <strong>{item.title}</strong>
          Added To Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  //handleAddTofav
  const isInFav = favorites.some((i) => i.id === item.id);

  const handleAddTofav = () => {
    if (isInFav) {
      removefav(item.id);
      toast.error(`${item.title} Removed From Favorites`);
    } else {
      AddTofavorites(item);
      toast.success(`${item.title} Added To Favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="state-cart">
          <FaCheck /> in cart
        </span>
        <div className="img-product">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>

        <p className="price">
          <span>${item.price.toFixed(2)}</span>
        </p>
      </Link>
      <div className="icon">
        <span className="btn-cart" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? "infav" : ""}`}>
          <FaRegHeart onClick={handleAddTofav} />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
