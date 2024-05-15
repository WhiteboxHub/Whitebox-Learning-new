import React from "react";

export default function ClassComp() {
  return (
    <div className=" flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown1">Batch:</label>
        <select
          id="dropdown1"
          className="border border-gray-300 text-purple-700  rounded-md px-2 py-1"
        >
        <option value="option1">Please Select the Batch...</option>
          <option value="option1">Jan 2024</option>
          <option value="option1">April 2024</option>
        </select>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown2">Recordings:</label>
        <select
          id="dropdown2"
          className="border border-gray-300 text-purple-700 rounded-md px-2 py-1"
        >
         <option value="option1">Please Select the Topic ...</option>
         <option value="option1">Html</option>
          <option value="option1">Css</option>
          <option value="option1">Js</option>
          <option value="option1">React</option>
          <option value="option1">Node</option>
        </select>
      </div>
    </div>
  );
}



