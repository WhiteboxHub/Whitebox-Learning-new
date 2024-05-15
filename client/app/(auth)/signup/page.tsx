"use client";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");

  const [responseStatus, setResponseStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Construct the user object with all form data

      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          password,
          address,
          zip,
        }), // Send all form data to the server
      });

      if (response.ok) {
        setResponseStatus("success");
      } else {
        setResponseStatus("error");
      }

      const data = await response.json();

      if (response.ok) {
        // Display success message if registration was successful
        setMessage(data);
      } else {
        // Display error message if registration failed
        // setMessage(data.error || "Registration failed");
        setMessage(data.error);
      }
    } catch (error) {
      // Log any errors that occur during the request
      // console.error("Error:", error);
      setMessage("An error occurred during registration");
    }

    // Clear form fields after submission
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setAddress("");
    setZip("");
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make learning easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="First and last name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="phone-number"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone-number"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="address"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Your complete Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="zip"
                  >
                    Zip <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="zip"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Zip code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                <input type="checkbox" className="form-checkbox" />I agree to be
                contacted by Open PRO about this offer as per the Open PRO{" "}
                <Link
                  legacyBehavior
                  href="#"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            {/* {message && <p className="text-red-500">{message}</p>} */}
            {/* Error/Success Message */}
            {message && (
              <div
                className={`text-center text-sm mt-4 ${
                  responseStatus === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </div>
            )}
            <div className="text-gray-400 text-center mt-6">
              Already using WhiteboxLearning?{" "}
              <Link
                legacyBehavior
                href="/signin"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
