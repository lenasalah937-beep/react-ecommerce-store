import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sugg, setsugg] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchsugg = async () => {
      if (!searchTerm.trim()) {
        setsugg([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();
        setsugg(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("search error", error);
        setsugg([]);
      }
    };
    const debonuce = setTimeout(() => {
      fetchsugg();
    }, 300);
  }, [searchTerm]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setsugg([]);
  };

  useEffect(() => {
    setsugg([]);
  }, [location]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {sugg.length > 0 && (
        <ul className="suggestions">
          {sugg.map((item) => (
            <Link to={`/products/${item.id}`}>
              <li key={item.id}>
                <img src={item.images[0]} alt="" />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
