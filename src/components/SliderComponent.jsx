import React, { lazy } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../Utils/data";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    lazy: false,
    appendDots: (dots) => (
      <div className="slick-dots">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <div>
      <Fade>
        <div className="flex justify-center my-10 lg:mx-8 items-center">
          <Slider
            {...settings}
            className="w-full rounded-xl overflow-hidden shadow-2xl"
          >
            {images.map((img, index) => (
              <div key={index} className="relative h-[80vh] md:max-h-[96vh]">
                <img
                  src={img.url}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full shadow-2xl rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 lg:gap-16 z-10 p-4 lg:p-8">
                  <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-3xl">
                    <TypeAnimation
                      sequence={[`${img.description}`, 5000]}
                      speed={25}
                      style={{
                        fontSize: "2em",
                        color: "white",
                        fontFamily: "Yantramanav, sans-serif",
                      }}
                      repeat={1}
                      cursor={false}
                    />

                    <p className="text-lg text-gray-200 font-yantramanav lg:text-xl  mb-4">
                      ...but the greatest of these is LOVE.
                    </p>
                    <p className="text-lg text-gray-200 lg:text-xl italic mb-8">
                      (1 Corinthians 13:13)
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link to="/about" className="">
                        <button
                          className={`${
                            img.title == "Spirit TV"
                              ? "bg-red-400 hover:bg-red-800"
                              : "bg-blue-500 hover:bg-blue-700"
                          } text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                        >
                          {img.button}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </div>
  );
}
