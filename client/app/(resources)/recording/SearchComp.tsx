import React from "react";
export default function SearchComp({ handleSearch }:any) {
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div className=" flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <input
          className="rounded-xl  text-purple-700"
          type="text"
          placeholder="search you recordings Here..... "
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
