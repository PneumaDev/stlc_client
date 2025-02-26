import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import { Link } from "react-router-dom";

const NavList = memo(() => {
  return (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center">
      {["Home", "About", "Sermons", "Partners", "Contact"].map((item) => (
        <li
          key={item}
          className="border-blue-gray-700 border-b-2 font-medium font-serif"
        >
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="flex items-center hover:text-blue-500 transition-colors font-imprima"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
});

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);

  const toggleNav = useCallback(() => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  }, []);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Only set isFixed for small devices
      if (window.innerWidth < 960) {
        setIsFixed(window.scrollY > 50); // Adjust this value as needed
      } else {
        setIsFixed(false); // Ensure it's not sticky on larger devices
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-purple-50 mx-4 md:mx-auto lg:mx-auto mt-2 max-w-screen-xl px-6 py-4 rounded-lg transition-shadow duration-300 ease-in-out ${
        isFixed
          ? "sticky top-0 z-50 w-full ml-0 shadow-lg rounded-none"
          : "relative shadow-md"
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className="text-xl font-bold mr-4 cursor-pointer py-1.5 font-imprima"
        >
          STLC
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          type="button"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={toggleNav}
        >
          {openNav ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {openNav && (
        <div
          className="lg:hidden absolute py-4 w-full top-16 left-0 right-0 bg-brown-50 z-50 rounded-lg"
          onClick={toggleNav}
        >
          <NavList />
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
