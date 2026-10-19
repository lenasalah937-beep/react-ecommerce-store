import { useContext } from "react";
import { FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from "../../components/context/cartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const { CartItem, AddToCart, AddTofavorites, favorites, removefav } =
    useContext(cartContext);
  const isInCart = CartItem.some((i) => i.id === product.id);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    AddToCart(product);

    toast.success(
      <div className="toast-cover">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-con">
          <strong>{product.title}</strong>
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

  //fav
  const isInFav = favorites.some((i) => i.id === product.id);

  const handleAddTofav = () => {
    if (isInFav) {
      removefav(product.id);
      toast.error(`${product.title} Removed From Favorites`);
    } else {
      AddTofavorites(product);
      toast.success(`${product.title} Added To Favorites`);
    }
  };

  return (
    <div className="details">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price">$ {product.price.toFixed(2)}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} producte left in stock</span>
      </h5>

      <button
        onClick={handleAddToCart}
        className={`btn ${isInCart ? "in-cart" : ""}`}
      >
        {isInCart ? "item in cart" : "Add to cart"} <TiShoppingCart />
      </button>
      <div className="icons">
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
