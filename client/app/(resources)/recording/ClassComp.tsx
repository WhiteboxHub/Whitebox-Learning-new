// import React from "react";

// export default function ClassComp() {
//   return (
//     <div className=" flex-grow space-y-4 ml-4">
//       <div className="flex flex-col flex-grow">
//         <label htmlFor="dropdown1">Batch:</label>
//         <select
//           id="dropdown1"
//           className="border border-gray-300 text-purple-700  rounded-md px-2 py-1"
//         >
//         <option value="option1">Please Select the Batch...</option>
//           <option value="option1">Jan 2024</option>
//           <option value="option1">April 2024</option>
//         </select>
//       </div>
//       <div className="flex flex-col flex-grow">
//         <label htmlFor="dropdown2">Recordings:</label>
//         <select
//           id="dropdown2"
//           className="border border-gray-300 text-purple-700 rounded-md px-2 py-1"
//         >
//          <option value="option1">Please Select the Topic ...</option>
//          <option value="option1">Html</option>
//           <option value="option1">Css</option>
//           <option value="option1">Js</option>
//           <option value="option1">React</option>
//           <option value="option1">Node</option>
//         </select>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import videoData from "../../../videos.json";

export default function ClassComp() {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    // Filter recordings based on selected batch
    if (selectedBatch) {
      const filteredRecordings = videoData.filter(
        (video) => video.batch === selectedBatch
      );
      setRecordings(filteredRecordings);
    }
  }, [selectedBatch]);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  return (
    <div className="flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown1">Batch:</label>
        <select
          id="dropdown1"
          className="border border-gray-300 text-purple-700 rounded-md px-2 py-1"
          value={selectedBatch}
          onChange={handleBatchChange}
        >
          <option value="">Please Select the Batch...</option>
          <option value="Jan2024">Jan 2024</option>
          <option value="April2024">April 2024</option>
          {/* Add more batch options as needed */}
        </select>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown2">Recordings:</label>
        <select
          id="dropdown2"
          className="border border-gray-300 text-purple-700 rounded-md px-2 py-1"
        >
          <option value="">Please Select the Topic...</option>
          {recordings.map((recording) => (
            <option key={recording.id} value={recording.id}>
              {recording.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
