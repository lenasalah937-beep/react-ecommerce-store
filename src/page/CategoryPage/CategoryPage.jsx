import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideprodect/Product";
import "./CategoryPage.css";
import SlideLoading from "../../components/slideprodect/SlideLoading";
import PageTrans from "../../components/PageTrans";

export default function CategoryPage() {
  const { category } = useParams();
  const [CategoryP, setCategoryP] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryP(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <PageTrans key={category}>
      <div className="category-product">
        {Loading ? (
          <SlideLoading key={category} />
        ) : (
          <div className="container">
            <div className="top-slide">
              <h2>
                {category}: {CategoryP.limit}
              </h2>
              <p>Check out our latest products!</p>
            </div>
            <div className="products">
              {CategoryP.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTrans>
  );
}
