import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import SlideProduct from "../../components/slideprodect/slideProduct";
import LodingP from "./lodingP";
import SlideLoading from "../../components/slideprodect/SlideLoading";
import ProductImges from "./productImges";
import ProductInfo from "./productInfo";
import PageTrans from "../../components/PageTrans";
export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setrelated] = useState([]);
  const [loadingRe, setLoadingRe] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setrelated(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRe(false));
  }, [product?.category]);

  if (!product) return <p>Product not found</p>;
  return (
    <PageTrans key={id}>
      <div>
        {loading ? (
          <LodingP />
        ) : (
          <div className="item-details">
            <div className="container">
              <ProductImges product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingRe ? (
          <SlideLoading />
        ) : (
          <SlideProduct
            key={product.category}
            data={related}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTrans>
  );
}
