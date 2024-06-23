import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-blue-900">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full "
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
          Greetings from my premier real estate agency, where our goal is to deliver outstanding service and expertise to assist our clients in accomplishing their real estate aspirations. With extensive experience in the field, our team of devoted experts has established a renowned reputation for excellence and integrity.
            <br/>
            <br/>
            We are dedicated to keeping abreast of the latest trends and technologies in the real estate market. Leveraging our knowledge and expertise, we confidently guide our clients through the buying and selling process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































