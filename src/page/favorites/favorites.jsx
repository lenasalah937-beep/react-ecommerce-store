import { useContext } from "react";
import { cartContext } from "../../components/context/cartContext";
import PageTrans from "../../components/PageTrans";
import Product from "../../components/slideprodect/Product";

export default function Favorites() {
  const { favorites } = useContext(cartContext);

  return (
    <PageTrans>
      <div className="category-product fav">
        <div className="container">
          <div className="top-slide">
            <h2>Your Favorites: </h2>
          </div>

          {favorites.length === 0 ? (
            <p>No Favorites Product Yet.</p>
          ) : (
            <div className="products">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTrans>
  );
}
