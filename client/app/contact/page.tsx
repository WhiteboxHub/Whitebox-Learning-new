import React from "react";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
const ContactPage: React.FC = () => {
  return (
    <div className="w-3/4  text-purple-600 mx-auto px-4 sm:px-6 py-12  mt-8">
      <nav className="  flex items-center my-8 justify-between ">
        <div className="">
          <h1 className="text-3xl font-bold mb-8">Contact</h1>
          <h1 className="text-xl font-light">Get in touch</h1>
          <h1 className="font-semibold">We'd love to hear from you.</h1>
        </div>
        <div className="md:block hidden">
          {/* <Breadcrumb /> */}
          <Layout currentPage="ContactPage">{/* Page content */}</Layout>
        </div>
      </nav>
      <div className="md:flex">
        <div className="w-full md:3/4 p-4 ">
          <ContactForm />
        </div>
        <div className=" p-4  flex   justify-center md:justify-end">
          {" "}
          {/* Adjusted here */}
          <ContactDetails />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">How to find us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.692512341928!2d-121.91246142459563!3d37.703419816267946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec05cb8a6a33%3A0x50cb7964adacbf25!2sWhitebox%20Learning%20Inc!5e0!3m2!1sen!2sin!4v1714515428412!5m2!1sen!2sin"
          className="w-full h-96 rounded-md"
          frameBorder="0"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};
export default ContactPage;
