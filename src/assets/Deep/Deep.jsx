import React from "react";

const Deep = () => {
  return (
    <div className="deep-text-section bg-blue-800 text-white text-center ">
      <div className="flex flex-col items-center m-auto justify-center w-7/12 relative top-20">
        <div>
          <span>FOR A SUCCESSFUL BUSINESS </span>
        </div>
        <div>
          <span className="text-5xl font-bold m-4">
            Deep Analytics for Great ROI{" "}
          </span>
        </div><br/>
        <div>
          <small className="p-6 text-lg text-center text-gray-300">
            Zoho CRM comes equipped with advanced analytics tools that offer
            meaningful insights so <br/>you can make informed decisions. Create
            custom reports and dashboards and measure <br/>operations in real time to
            stay on top of your business performance. Our in-house AI assistant,<br/>
            Zia, offers accurate predictions and next steps to be taken for each
            lead.
          </small>
        </div>
      </div><br/>
      {/* lower section */}
      <div className="w-9/12 flex justify-center flex-col items-center m-auto mt-20 p-4">
            <div className=" flex gap-4 w-full m-5 justify-center" >
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-individual_target.svg"
                    className="  w-3/12"
                /> 
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-region_wise_tracker.svg"
                    className="w-2/12"
                />
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-team_performance.svg"
                    className="w-2/12"
                />
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-revenue_share.svg"
                    className="w-2/12"
                />
            </div>
            <div className="flex w-full justify-center gap-10">
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-sales_reps_individual_arget.svg"
                    className="w-4/12"
                />
                <img
                    src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-recent_lead_generation.svg"
                    className="w-5/12"
                />

            </div>
      </div>
    </div>
  );
};

export default Deep;
