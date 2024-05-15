"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import logo from "@/public/images/wbl-logo-removebg-preview.svg";

export default function Header() {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle clicking on a dropdown item and close dropdown
  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src={logo}
                alt="logo"
                className="w-10 h-10 text-purple-600"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                >
                  Schedule
                </Link>
              </li>
              {/* Dropdown for Resources */}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out focus:outline-none"
                >
                  Resources
                </button>
                {dropdownOpen && (
                  <ul className="text-purple-600 absolute z-10 left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                    {/* <ul className="  absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg"> */}
                    <li>
                      <Link legacyBehavior href="/recording">
                        <a
                          onClick={handleDropdownItemClick}
                          className="block rounded-md px-4 py-2  hover:bg-gray-600 transition duration-150 ease-in-out"
                        >
                          Recordings
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/presentation">
                        <a
                          onClick={handleDropdownItemClick}
                          className="block rounded-md px-4 py-2  hover:bg-gray-600 transition duration-150 ease-in-out"
                        >
                          Presentation
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/assignment">
                        <a
                          onClick={handleDropdownItemClick}
                          className="block rounded-md px-4 py-2   hover:bg-gray-600 transition duration-150 ease-in-out"
                        >
                          Assignments
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="/resource4">
                        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out">
                        Question Bank
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
