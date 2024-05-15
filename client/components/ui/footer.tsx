import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/wbl-logo-removebg-preview.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contactus">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center">
  {/* Left side content */}
  <div className="md:w-1/2">
    {/* Content goes here */}
    <div className="md:col-span-4 lg:col-span-5">
      <div className="mb-2">
        {/* Logo */}
        <Link href="/" className="inline-block" aria-label="Cruip">
          <Image
            src={logo}
            alt="logo"
            className="w-10 h-10 text-purple-600"
          ></Image>
        </Link>
      </div>
      <div className="text-gray-400">
        Need any help?{" "}
        <a href="mailto:info@whitebox-learning.com">Contact us now!</a>
      </div>
    </div>
  </div>
  {/* Right side content */}
  <div className="md:w-1/2 flex justify-end">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.692512341928!2d-121.91246142459563!3d37.703419816267946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec05cb8a6a33%3A0x50cb7964adacbf25!2sWhitebox%20Learning%20Inc!5e0!3m2!1sen!2sin!4v1714515428412!5m2!1sen!2sin"
      className=" h-50 md:w-45 rounded-md"
    ></iframe>
  </div>
</div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between pt-5 pr-12">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="https://twitter.com/whiteboxQALearn"
                  target="_blank"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>

              <li className="ml-4">
                <Link
                  href="https://github.com/WhiteboxHub"
                  target="_blank"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              
              <li className="ml-4">
                <Link
                  href="https://www.linkedin.com/company/whitebox-learning/about/"
                  target="_blank"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; {currentYear} Whitebox Learning. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}