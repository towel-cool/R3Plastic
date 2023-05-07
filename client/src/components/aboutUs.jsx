import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto py-12 px-4 text-center mb-40">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 p-32 ">About Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img src="./unity.png"  alt="Team" className="w-50 h-50 rounded-full shadow-lg mb-8" />
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-gray-900 leading-normal mb-6 overflow-y-scroll">
              R3Plastic is a company that is dedicated to helping the environment, and forming a convenient way for people to recycle their plastic waste.
              Our mission is to reduce the amount of plastic waste that ends up in landfills and oceans, repurposing it into new, usable products.
            </p>
            <p className="text-xl text-gray-900 leading-normal mb-6">
              The R3Plastic team is passionate about sustainability and making a positive impact on the world. We believe small, everyday changes can result in big results, and are committed to doing our part in ensuring the best for our earth.
            </p>
            <p className="text-xl text-gray-900 leading-normal mb-6">
              Our team is composed of dedicated individuals from various backgrounds, united by our shared values of environmental responsibility and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
