const Footer = () => {
  return (
    <footer className="bg-gray-800 flex flex-col justify-center items-center space-y-7 py-5 mt-5 ">
      <div className="text-white flex md:flex-row flex-col w-full justify-around md:space-y-0 space-y-5">
        <button className="px-5 py-2 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 rounded">
          <h1 className="font-semibold">Phone Number</h1>
          <h1 className="font-light">+91 7013229135</h1>
        </button>
        <button className="px-5 py-2 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 rounded">
          <h1 className="font-semibold">Email Address</h1>
          <h1 className="font-light">zxc@gmail.com</h1>
        </button>
        <button className="px-5 py-2 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 rounded">
          <h1 className="font-semibold">Office Location</h1>
          <h1 className="font-light">Ambassador street, Zone 61</h1>
        </button>
      </div>
      <div className="flex md:flex-row flex-col items-center md:pl-32 space-x-10 space-y-5 md:space-y-0 w-full px-5">
        <div className="flex flex-col items-center bg-white justify-center px-4 py-1 rounded text-warp">
          <div className="flex text-left items-center">
            <h1 className="text-violet-950 font-medium text-lg mr-1">ELBRIT</h1>
            <span>©</span>
          </div>
          <h1 className="text-red-700 font-normal text-sm">
            ELBRIT LIFE SCIENCES PVT LTD
          </h1>
        </div>
        <p className="text-white text-xs  text-left md:w-96">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <p className="text-white text-center text-xs">
        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </p>
    </footer>
  );
};
export default Footer;
