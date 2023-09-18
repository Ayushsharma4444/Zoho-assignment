import React from "react";
import "./home.css";
import Navbar2 from '../Navbar/Navbar2'
const Home = () => {
  return (
    <>
   <div className="bg-blue-500 !imortant"><Navbar2 /></div> 
    <div className="home py-48">
      <div className="left-text-container">
        <div className="flex items-center justify-center" >
        <div className="flex flex-col">
          <span className="text-7xl font-extrabold">THE WORLD'S<br/> FAVORITE CRM.<br/><small className="mid text-7xl "> MADE IN INDIA.</small></span>
          <small className="text-base">
            Who said world-class software can only be built in Silicon Valley?
            Zoho CRM<br/> empowers 250,000+ global businesses to deliver fantastic
            customer experiences<br/> and drive remarkable growth. Made right here in
            India–try the SaaS from Madras!
          </small>
          </div>
        </div>
      </div>

      <div className="right-input-comtainer">
        <form>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-xl m-auto font-bold font-medium">Get started with your free trial</label>
            <input
              type="name"
              id="email"
              class=" placeholder:text-white bg-blue-600 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-white-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              required
            /></div>
          <div class="mb-6">
            <input
              type="email"
              id="email"
              class="  placeholder:text-white bg-blue-600 border border-white text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-white-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-6">
            {/* <label for="password" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your password</label> */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              class=" placeholder:text-white bg-blue-600 bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            {/* <label for="password" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your password</label> */}
            <input
              type="number"
              id="number"
              placeholder="Number"
              class=" placeholder:text-white bg-blue-600 bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-white-800 dark:focus:ring-offset-white-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-xs font-sm text-white-900 dark:text-white-300"
            >
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Home;
