import React from "react";

export default function SessionComp() {
  return (
    <div className=" flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown1">Group Mock:</label>
        <select
          id="dropdown1"
          className="border border-gray-300 rounded-md text-purple-700  px-2 py-1"
        >
          <option value="option1">UI Fullstack</option>
          <option value="option2">ML-DS</option>
          <option value="option3">QE</option>
        </select>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown2">Please Select the Subject:</label>
        <select
          id="dropdown2"
          className="border border-gray-300 text-purple-700 rounded-md px-2 py-1"
        >
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
