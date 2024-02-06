import React from "react";
import Slider from "react-slick";
import bawantha from "../../assets/ba.jpg";
import sakila from "../../assets/sa.jpg";
import dulsha from "../../assets/du.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Dulsha Senawiratna",
    text: "Absolutely love the coffee here! The Premium Blend is a game-changer. Rich, aromatic, and always served with a smile. This place has become my go-to for a perfect coffee fix!",
    img: dulsha,
  },
  {
    id: 2,
    name: "Sakila Atapattu",
    text: "As a coffee enthusiast, I'm impressed with the quality at this shop. The attention to detail in crafting each cup is evident. The cozy ambiance only adds to the overall delightful experience. Highly recommended!",
    img: sakila,
  },
  {
    id: 3,
    name: "Bawantha Premod",
    text: "A gem in the city! The Signature Reserve Coffee Blend is a must-try. The staff is friendly, and the atmosphere is inviting. Whether catching up with friends or enjoying a quiet moment, this coffee shop has it all.",
    img: bawantha,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
