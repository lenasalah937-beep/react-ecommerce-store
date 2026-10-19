import HeroSlider from "../../components/HeroSlider";
import PageTrans from "../../components/PageTrans";
import SlideLoading from "../../components/slideprodect/SlideLoading";
import SlideProduct from "../../components/slideprodect/slideProduct";
import "./Home.css";
import { useEffect, useState } from "react";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "womens-watches",
  "sports-accessories",
];

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <PageTrans>
      <div>
        <HeroSlider />

        {loading
          ? categories.map((category) => <SlideLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTrans>
  );
}
