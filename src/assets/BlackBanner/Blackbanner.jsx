import React from "react";
import "./blackbanner.css";
const Blackbanner = () => {
  return (
<>
        

    <div className="blackbanner ">
<div className=" m-auto flex justify-center p-2 flex-wrap  ">
    <div className="banner relative bottom-32    gap-4 ">
        <div className="flex flex-wrap justify-between bg-white-400 gap-4 ">
            <div className="text-black font-medium text-base w-96 flex p-4 gap-8  ">
                <div className=" rounded-lg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCt2ZYW0DeZCZI1E37KoqLC78XRss0zZLMPA&usqp=CAU"/></div>
                <span className="">Visionary in 2022 Magic Quadrant™ for Sales Force Automation Platforms</span>
            </div>
            <div className="text-black font-medium text-base w-96  flex p-4 gap-4 ">
            <div className="w-3/12"><img src="https://www.zohowebstatic.com/sites/default/files/crm/crm-watchlist-banner-1x.png"/></div>
                <span>Winner with the highest score<br/> in CRM Watchlist 2022</span>
            </div>
        </div>
        <hr className="mb-4"/>
        <div className="flex justify-center  ml-10 ">
          <div>
            <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-ola-282225.png?f=webp"
                className="w-6/12"
            />
          </div>
          <div>
            <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-ola-282225.png?f=webp"
                className="w-6/12"
            />
          </div>
          <div>
            <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-ola-282225.png?f=webp"
                className="w-6/12"
            />
          </div>
          <div>
            <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-ola-282225.png?f=webp"
                className="w-6/12"
            />
          </div>
          <div>
            <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-ola-282225.png?f=webp"
                className="w-6/12"
            />
          </div>
          

        </div>
        </div>
</div>
    <div className=" flex justify-center text-center flex-col items-center m-auto w-7/12">
      {/* upper section */}
      <div className="max-w-4xl p-4">
        <div className="blackbanner-text flex items-center justify-center flex-col ">
          <p className="text-lg ">FOR LOYAL CUSTOMER</p>
          <small className="text-5xl font-bold">
            Build Great Customer <br /> RelationShip
          </small>
          <span className="px-2 py-8">
            Providing personalized experiences is what keeps customers around,
            and Zoho CRM can help <br/>you do just that. With the power of
            omnichannel presence, segmentation, predictive<br/> intelligence, and
            more, you can build and maintain great customer relationships.
          </span>
          <small className="text-yellow-400 font-medium text-sm py-4">How Zoho CRM can help build better relationship --></small>
        </div>
      </div>

      {/* lower <section></section> */}

      <div className="w-full flex justify-center">
        <div className="flex flex-start w-11/12  items-end justify-center">
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-melinda-calling.svg"
            className=" w-4/12 relative bottom-10"
          />
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-multichanel-man-1x.webp"
            className="w-7/12    relative"
          />
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-twitter-reply.svg"
            className="w-5/12 relative right-8 bottom-16 "
          />
        </div>
      </div>
      {/* <div className="w-80">
        <div className="flex ">
        {/* <img
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-melinda-calling.svg"
            // width={100}
            className="w-60   "
        /> */}
         {/* <img
                src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-twitter-reply.svg"
                className="w-60  "
            /> *
            <img
                src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-multichanel-man-1x.webp"
                className=" mt-4 "
            />
            

           
           
            
        </div>
      </div> */}
    </div>

    </div>
    </>
  );
};

export default Blackbanner;
