import React from "react";

const Productivity = () => {
  return (
    <div className=" productivity flex justify-center flex-col  items-center">
      <div className="producitivity-text-container text-center p-10 ">
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
        </div>
        <br />
        <div>
          <span className="text-black font-sm text-lg">
            Automating your workflows, processes, campaigns, customer journeys,
            and more enables
            <br /> you to focus on building great relationships. Zoho CRM is
            built to get more done in less time.
          </span>
          <br />
          <br />
          <small className="text-blue-600 text-lg ">
            How to get more done in less time with Zoho CRM
          </small>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-start w-7/12  items-end justify-center">
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-automation_workflow.svg"
            className=" w-8/12 "
          />
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-workflow_girl_1x.webp"
            className="w-8/12 right-14   relative"
          />
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-zia.svg"
            className="w-4/12 relative right-20 top-20  "
          />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
