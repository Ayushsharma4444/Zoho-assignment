import React from "react";

const Productivity = () => {
  return (
    <div>
      <div className="producitivity-text-container text-center">
        <div>
          <span className="text-blue-600 text-4xl  ">
            Sensational software for a sensible price.
          </span>
        </div>
        <div className="flex gap-4 justify-center p-6">
          <button className="bg-orange-500 p-4 rounded-xl w-40    ">
            Sign up For free
          </button>
          <button className="bg-none text-gray-400  p-4 rounded-xl w-40 border-2  ">
            See all Features
          </button>
        </div>
        <br />
        <div>
          <small className="text-5xl font-bold text-black">
            Maximum productivity with <br />
            minimum use
          </small>
        </div><br/>
        <div>
          <span className="text-black font-sm text-lg">
            Automating your workflows, processes, campaigns, customer journeys,
            and more enables<br/> you to focus on building great relationships. Zoho
            CRM is built to get more done in less time. 
          </span><br/><br/>
          <small className="text-blue-600 text-lg ">How to get more done in
            less time with Zoho CRM</small>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
