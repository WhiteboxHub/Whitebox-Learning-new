// import React from "react";

// const subjects = [
//   { id: 1, name: "TAILWIND_CSS", pdfUrl: "https://tailwindcomponents.com/cheatsheet/" },
//   { id: 2, name: "NPM Registary", pdfUrl: "" },
//   { id: 3, name: "React", pdfUrl: "" },
//   // Add more subjects as needed
// ];
// const Installation = () => {
//   return (
//     <div className="max-w-6xl  mx-auto px-4 sm:px-6 py-12">
//       <h1 className="text-4xl font-bold mb-8">Installation </h1>
//       <div className="overflow-x-auto">
//         <table className="shadow-2xl shadow-gray-800  table-auto border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500  bg-gray-900  text-white w-36 px-4 py-2  mb-1">Serial No.</th>
//               <th className="border border-gray-500  bg-gray-900  text-white w-36 px-4 py-2  mb-1">Subject Name</th>
//             </tr>
//           </thead>
//           <tbody>

//             {subjects.map((subject, index) => (
//               <tr
//                 key={subject.id}
//                 className={`hover:bg-gray-700 ${index % 2 === 0 ? 'bg-gray-700' : ' bg-gray-800'}`} // Alternate row colors
//               >
//                 <td className="border text-white text-center border-gray-500  px-4 py-2">{index + 1}</td>
//                 <td className="border text-blue-400 text-center border-gray-500 px-4 py-2">
//                   {/* <a href={subject.pdfUrl} download>{subject.name}</a> */}
//                   <a href={subject.pdfUrl} >{subject.name}</a>
//                 </td>

//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// };

// export default Installation;
