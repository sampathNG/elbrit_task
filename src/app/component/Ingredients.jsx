import React from "react";
import Image from "next/image";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.jpeg";
const Ingredients = () => {
  return (
    <div className="flex md:flex-col flex-col items-center mt-5 justify-center space-y-10 ">
      <div className="flex flex-col items-center md:flex-row space-y-10 md:px-20 ">
        <div className="text-warp md:w-1/3 md:text-left text-center">
          <h1 className="text-blue-800 font-medium text-lg">Ingredients</h1>
          <h1 className="text-blue-950 pt-3 pb-5 font-bold text-4xl">
            Better Ingredients
          </h1>
          <p className="text-gray-500">
            Only the best when you choose products offered on our platform
            high-quality ingredients for high quality products!
          </p>
        </div>
        <div className="relative md:w-1/3">
          <h1 className="text-blue-950 font-medium text-lg absolute pl-9 pt-6">
            Vitamin C
          </h1>
          <h1 className="text-gray-600  absolute pl-9 pt-16">
            Vitamin C as abscorbic acid
          </h1>
          <h1 className="text-blue-950 font-normal text-base absolute pl-9 pt-36 underline underline-offset-4">
            See More
          </h1>
          <Image
            src={image2}
            alt="Ingredients"
            width={350}
            height={400}
            className=""
          />
        </div>
        <div className="relative md:w-1/3">
          <h1 className="text-blue-950 font-medium text-lg absolute pl-9 pt-6">
            Vitamin B3
          </h1>
          <h1 className="text-gray-600  absolute pl-9 pt-16">
            Niacin for healthy gut and skin
          </h1>
          <h1 className="text-blue-950 font-normal text-base absolute pl-9 pt-36 underline underline-offset-4">
            See More
          </h1>
          <Image
            src={image3}
            alt="Ingredients"
            width={350}
            height={400}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-x-10">
        <div className="relative md:w-1/3 md:pt-10">
          <h1 className="text-blue-950 font-medium text-lg absolute pl-9 pt-6">
            Vitamin B3
          </h1>
          <h1 className="text-gray-600  absolute pl-9 pt-16">
            Niacin for healthy gut and skin
          </h1>
          <h1 className="text-blue-950 font-normal text-base absolute pl-9 pt-36 underline underline-offset-4">
            See More
          </h1>
          <Image
            src={image4}
            alt="Ingredients"
            width={350}
            height={400}
            className=""
          />
        </div>
        <div className="relative md:w-1/3">
          <h1 className="text-blue-950 font-medium text-lg absolute pl-9 pt-6">
            Vitamin B3
          </h1>
          <h1 className="text-gray-600  absolute pl-9 pt-16">
            Niacin for healthy gut and skin
          </h1>
          <h1 className="text-blue-950 font-normal text-base absolute pl-9 pt-36 underline underline-offset-4">
            See More
          </h1>
          <Image
            src={image5}
            alt="Ingredients"
            width={350}
            height={400}
            className=""
          />
        </div>
        <div className="relative md:w-1/3 ">
          <h1 className="text-blue-950 font-medium text-lg absolute pl-9 pt-6">
            Vitamin B3
          </h1>
          <h1 className="text-gray-600  absolute pl-9 pt-16">
            Niacin for healthy gut and skin
          </h1>
          <h1 className="text-blue-950 font-normal text-base absolute pl-9 pt-36 underline underline-offset-4">
            See More
          </h1>
          <Image
            src={image6}
            alt="Ingredients"
            width={350}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default Ingredients;
