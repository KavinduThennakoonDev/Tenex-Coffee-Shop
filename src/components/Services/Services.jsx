import React from "react";
import cofee1 from "../../assets/cofee1.jpg";
import cofee2 from "../../assets/cofee2.jpg";
import cofee3 from "../../assets/cofee3.jpg";
const ServicesData = [
  {
    id: 1,
    img: cofee1,
    name: "Espresso",
    description:
      "Bold, concentrated, and rich; Espresso is the essence of pure coffee flavor.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: cofee2,
    name: "Americano",
    description:
      "Americano: Diluted espresso with hot water, delivering a smooth and robust coffee experience.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: cofee3,
    name: "Cappuccino",
    description:
      "Cappuccino: A harmonious blend of espresso, steamed milk, and velvety foam, creating a balanced and indulgent coffee delight",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
