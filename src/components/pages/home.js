import React from "react";
import Image from "../../assets/main.jpg";

const HomePage = () => {
  return (
    <div id="home" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
        <img
        src={Image}
        alt="Home"
        className="w-full h-auto object-cover rounded-tr-full rounded-br-full m-5 p-5"
        style={{
          transform: 'rotate(0)', // Ensure image is straight
          animation: 'pulse 2s infinite', // Animation with 2 second duration, infinite loop
          animationTimingFunction: 'ease-in-out' // Smooth animation timing
        }}
      />
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1); /* Start and end scale */
          }
          50% {
            transform: scale(1.1); /* Peak scale */
          }
        }
      `}</style>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Your <span className="text-blue-900">Dream Home</span></h1>
            <p className="text-lg text-gray-700 mb-8">
            Welcome to our real estate agency, where discovering your dream home is our top priority. Our team of seasoned agents is committed to providing exceptional service and guiding you through the intricate process of buying or selling a property.
            </p>
           
          <div className="text-center md:text-left">
          <form className="flex flex-col md:flex-row gap-4">
          
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your Email"
              className="px-4 py-2 bg-white rounded-full shadow-lg focus:outline-none"
            />
            <button className="px-6 py-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800">
              Get Started
            </button>
          </form>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;























