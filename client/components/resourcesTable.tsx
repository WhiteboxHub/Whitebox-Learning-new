import React from 'react'

const ResourcesTable = (props:any) => {
  return (
    <div className="overflow-x-auto">
    <table className="shadow-2xl shadow-gray-800  table-auto border-collapse border border-gray-500">
      <thead>
        <tr>
          <th className="border border-gray-500  bg-gray-900  text-white w-36 px-4 py-2  mb-1">Serial No.</th>
          <th className="border border-gray-500  bg-gray-900  text-white w-36 px-4 py-2  mb-1">Subject Name</th>
        </tr>
      </thead>
      <tbody>

        {props.subjects.map((subject:any, index:any) => (
          <tr
            key={subject.id}
            className={`hover:bg-gray-700 ${index % 2 === 0 ? 'bg-gray-700' : ' bg-gray-800'}`} // Alternate row colors
          >
            <td className="border text-white text-center border-gray-500  px-4 py-2">{index + 1}</td>
            <td className="border text-blue-400 text-center border-gray-500 px-4 py-2">
              {/* <a href={subject.pdfUrl} download>{subject.name}</a> */}
              <a href={subject.pdfUrl} >{subject.name}</a>
            </td>

          </tr>
        ))}

      </tbody>
    </table>
  </div>  )
}

export default ResourcesTable