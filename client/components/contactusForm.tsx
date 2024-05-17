// 'use client'
// import React, { useState } from "react";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20">
//       <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
//       <p className="mb-6">We'd love to hear from you.</p>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
//             Phone <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter your contact number"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="message"
//           >
//             Message <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your message here..."
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Send message
//         </button>
//       </form>
//     </div>
//   );
// };

// const ContactDetails: React.FC = () => {
//   return (
//     <div className="max-w-md mx-auto mt-20">
//       <div className="bg-gray-200 text-black p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-bold mb-4">Contact Details</h2>
//         <p className="mb-2">Fremont Office:</p>
//         <p>6500 Dublin Blvd.,Ste.214</p>
//         <p>Dublin, CA, 94568.</p>

//         <div className="mt-4">
//           <h2 className="text-lg font-bold mb-2">All Enquiries</h2>
//           <p className="mb-2">
//             Tel: <a href="tel:+19254007330">(925) 400-7330</a>
//           </p>
//           <p>
//             Email:{" "}
//             <a href="mailto:info@whitebox-learning.com">
//               info@whitebox-learning.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactPage: React.FC = () => {
//   return (
//     <div className="flex">
//       <div className="w-1/2 p-4">
//         <ContactForm />
//       </div>
//       <div className="w-1/2 p-4">
//         <ContactDetails />
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
