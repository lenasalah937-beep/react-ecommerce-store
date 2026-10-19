import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
export default function BottomHeader() {
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "Accessories", link: "/Accessories" },
    { title: "Blog", link: "/Blog" },
    { title: "Contact", link: "/Contact" },
  ];

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  console.log(category);

  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMdMenu />
              <p>Browse Categories</p>
              <IoMdArrowDropdown />
            </div>
            <div className={`category-nav-list ${isActive ? "active" : ""}`}>
              {category.map((category) => (
                <Link key={category.id} to={`category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav_links">
            {NavLinks.map((item) => (
              <li
                className={location.pathname === item.link ? "active" : ""}
                key={item.link}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>

        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
