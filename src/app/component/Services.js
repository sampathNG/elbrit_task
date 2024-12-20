const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="flex items-start space-x-4 p-6 hover:bg-gray-700 transition-colors duration-300 rounded-lg">
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);
const Services = () => {
  const services = [
    {
      title: "Clinically Studied",
      description:
        "All products that we offer have undergone lab and safety tests",
    },
    {
      title: "Vegetarian Friendly",
      description:
        "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      title: "Made in India",
      description:
        "Shop local and explore health products made right here in India",
    },
    {
      title: "Free shipping",
      description:
        "We deliver to your door with no shipping costs on your orders",
    },
    {
      title: "No Risk",
      description:
        "We ensure that all products are safe and within their use-by date",
    },
    {
      title: "GMO Free",
      description:
        "Natural, no modified products and derivatives for those who need it",
    },
  ];
  return (
    <div className="bg-gray-800 text-white m-5 rounded-3xl p-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="flex-1">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {services.slice(3).map((service, index) => (
              <div key={index} className="flex-1">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
