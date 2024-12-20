import React from "react";
import Image from "next/image";
import image from "./images/image1.jpeg";
const Explore = () => {
  return (
    <section className="bg-blue-100 flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-900">
        Essential Vitamins
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-24">
        <div className="text-center md:text-left">
          <p className="text-gray-500">Online Medical Supplies</p>
          <h1 className="text-blue-950 text-lg font-medium">
            Get Your Vitamins & Minerals
          </h1>
          <button className="mt-2 bg-blue-950 text-white rounded-lg py-2 px-6">
            Explore
          </button>
        </div>
        <Image
          src={image}
          alt="Essential Vitamins"
          width={300}
          height={400}
          className="md:py-10"
        />
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="text-blue-950 font-medium text-lg">Vitamins</h1>
            <p className="text-gray-500">
              Increased vitamins and <br /> minerals in your diet
            </p>
          </div>
          <div>
            <h1 className="text-blue-950 font-medium text-lg">Weight Loss</h1>
            <p className="text-gray-500">
              Weight loss and <br /> find scientifically proven solutions
            </p>
          </div>
          <div>
            <h1 className="text-blue-950 font-medium text-lg">
              Functional Foods
            </h1>
            <p className="text-gray-500">
              Functional foods <br /> from protein powders to baby formula
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
