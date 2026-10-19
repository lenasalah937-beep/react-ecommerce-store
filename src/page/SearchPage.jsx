import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTrans from "../components/PageTrans";
import SlideLoading from "../components/slideprodect/SlideLoading";
import Product from "../components/slideprodect/Product";
import "./search.css";

export default function SearchPage() {
  const [result, setresult] = useState([]);

  const [lod, setlod] = useState(true);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setresult(data.products || []);
      } catch (error) {
        console.error("search error", error);
      } finally {
        setlod(false);
      }
    };
    if (query) fetchRes();
  }, [query]);

  return (
    <PageTrans key={query}>
      <div className="category-product">
        {lod ? (
          <SlideLoading key={query} />
        ) : result.length > 0 ? (
          <div className="container">
            <div className="top-slide">
              <h2>Result For : {query}</h2>
            </div>
            <div className="products">
              {result.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>no result found</p>
          </div>
        )}
      </div>
    </PageTrans>
  );
}
