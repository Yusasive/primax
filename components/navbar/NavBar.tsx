"use client";

import { useState } from "react";
import { NavbarMenu } from "@/Data/NavBar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-52 bg-white bg-opacity-90 backdrop-blur-md backdrop-filter shadow-md">
          <div className="flex items-center text-4xl justify-center sm:justify-start gap-2 font-bold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="#623eca"
              />
            </svg>
            <span className="text-[#623eca]">Primax</span>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative">
                  {item.subMenu ? (
                    <button
                      onClick={handleDropdownToggle}
                      className="inline-flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold text-gray-600 hover:text-secondary"
                    >
                      {item.title}
                      <FaChevronDown className="ml-1" />
                    </button>
                  ) : (
                    <Link
                      href={item.link}
                      className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                        ${pathname === item.link ? "text-blue-600" : "text-gray-600 hover:text-secondary"}`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {item.subMenu && dropdownOpen && (
                    <ul className="absolute top-full mt-2 w-40 bg-white bg-opacity-90 lg:bg-opacity-100 backdrop-blur-md backdrop-filter border rounded-lg shadow-lg">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.link}
                            onClick={() => setDropdownOpen(false)}
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
          <div className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 w-full h-screen z-50 lg:hidden"
          >
            <div className="text-base font-semibold bg-white bg-opacity-60 backdrop-blur-md backdrop-filter shadow-md text-black py-4 m-4 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-6">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative">
                    {item.subMenu ? (
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="inline-flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold text-black hover:text-secondary"
                      >
                        {item.title}
                        <FaChevronDown className="ml-1" />
                      </button>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                          ${pathname === item.link ? "text-blue-600" : "text-black hover:text-secondary"}`}
                      >
                        {item.title}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.subMenu && dropdownOpen && (
                      <ul className="flex flex-col items-center gap-2 mt-2 bg-white w-full rounded-lg shadow-lg">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={subItem.link}
                              onClick={() => setIsOpen(false)}
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
