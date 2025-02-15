"use client";

import { useState } from "react";
import { NavbarMenu, MenuItem } from "@/Data/NavBar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (id: number) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  link: string
) => {
  if (link.startsWith("#")) {
    e.preventDefault();
    const targetElement = document.getElementById(link.substring(1));

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  }
};


  return (
    <>
      {/* Navbar Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-6 sm:px-12 lg:px-24 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
          <div className="flex items-center text-4xl font-bold text-[#623eca]">
            Primax
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item: MenuItem) => (
                <li key={item.id} className="relative">
                  {item.subMenu ? (
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className="flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold text-gray-600 hover:text-secondary"
                    >
                      {item.title}
                      <FaChevronDown className="ml-1" />
                    </button>
                  ) : (
                    <Link
                      href={
                        item.link.startsWith("#") ? item.link : `/${item.link}`
                      }
                      onClick={(e) =>
                        item.link.startsWith("#") &&
                        handleSmoothScroll(e, item.link)
                      }
                      className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold transition-all duration-300 ${
                        pathname === item.link
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-secondary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.subMenu && dropdownOpen === item.id && (
                    <ul className="absolute top-full mt-2 w-40 bg-white bg-opacity-90 backdrop-blur-md border rounded-lg shadow-lg">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={`#${subItem.link}`}
                            onClick={(e) =>
                              handleSmoothScroll(e, `#${subItem.link}`)
                            }
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-secondary"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 w-full h-screen z-50 lg:hidden"
          >
            <div className="text-base font-semibold bg-white bg-opacity-60 backdrop-blur-md shadow-md text-black py-4 m-4 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-6">
                {NavbarMenu.map((item: MenuItem) => (
                  <li key={item.id} className="relative">
                    {item.subMenu ? (
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold text-black hover:text-secondary"
                      >
                        {item.title}
                        <FaChevronDown className="ml-1" />
                      </button>
                    ) : (
                      <Link
                        href={
                          item.link.startsWith("#")
                            ? item.link
                            : `/${item.link}`
                        }
                        onClick={(e) => {
                          if (item.link.startsWith("#"))
                            handleSmoothScroll(e, item.link);
                          setIsOpen(false);
                        }}
                        className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold transition-all duration-300 ${
                          pathname === item.link
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-secondary"
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}

                    {/* Mobile Dropdown Menu */}
                    {item.subMenu && dropdownOpen === item.id && (
                      <ul className="flex flex-col items-center gap-2 mt-2 bg-white w-full rounded-lg shadow-lg">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={`#${subItem.link}`}
                              onClick={(e) => {
                                handleSmoothScroll(e, `#${subItem.link}`);
                                setIsOpen(false);
                              }}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-secondary"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
