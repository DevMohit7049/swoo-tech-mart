import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categories, finalProducts } from "@/Data/ProductData";

const SubNavbar = () => {
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dropdownRef = useRef();

  const filteredProducts = finalProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate(`/shop/search/${search}`);
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-[hsl(var(--brand-primary)/0.92)] backdrop-blur-md py-3 relative">
        <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">


          <div className="w-full lg:w-2/3 relative">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">

              <div className="relative hidden sm:flex">

                {/* TRIGGER */}
                <div
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center gap-2 px-4 text-gray-700 cursor-pointer border-r"
                >
                  <span className="font-medium text-sm">All Categories</span>
                  <FaChevronDown
                    className={`text-xs transition-transform ${showDropdown ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* DROPDOWN */}
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-52 z-50 border">
                    {categories.map((cat) => (
                      <div
                        key={cat.slug}
                        onClick={() => {
                          navigate(`/shop/category/${cat.slug}`);
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>


              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search anything..."
                className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400 text-sm"
              />


              <button
                onClick={handleSearch}
                className="px-4 text-gray-600 hover:text-brand-primary"
              >
                <FaSearch />
              </button>
            </div>


            {search && (
              <div className="absolute bg-white w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.slice(0, 6).map((item) => (
                    <div
                      key={item.slug}
                      onClick={() => {
                        navigate(`/shop/product/${item.slug}`);
                        setSearch("");
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <p className="text-sm line-clamp-1">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="p-3 text-sm text-gray-500">
                    No products found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-4 text-white text-sm">
            <span>Free shipping</span>
            <span>30 days money back</span>
            <span>100% secure</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SubNavbar;