import React from "react";

const ContactDetails: React.FC = () => {
  return (
    <div className="   last: text-purple-600 p-4  flex  h-3/4 md:text-start md:ml-4  rounded-lg ">
      <div className="">
        <h2 className="text-xl font-bold mb-4 underline underline-offset-4">
          Contact Details
        </h2>
        <p className="mb-2 font-semibold">Fremont Office:</p>
        <p className="text-white text-xs">
          6500 Dublin Blvd.,Ste.214 Dublin, CA, 94568.
        </p>

        <h2 className="text-base font-bold mb-2 mt-8">All Enquiries</h2>
        
        <p className="mb-2 text-xs">
          Tel:{" "}
          <a className="text-white" href="tel:+19254007330">
            +1 925-400-7330
          </a>
        </p>
        <p className="text-xs">
          Email:{" "}
          <a className="text-white" href="mailto:info@whitebox-learning.com">
            info@whitebox-learning.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
