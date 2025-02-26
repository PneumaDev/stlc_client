import React from "react";
import SliderComponent from "../components/SliderComponent";
import { CardDefault } from "../components/Card";
import { TestimonialCard } from "../components/Testimonial";
import { Button, Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Zoom } from "react-awesome-reveal";
import { Pagination, Autoplay } from "swiper/modules";
import { cardDetails } from "../Utils/data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen p-4 lg:mx-8">
      <div className="">
        <SliderComponent />
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-col lg:flex-row text-center sm:justify-center lg:justify-between gap-8 items-center">
          {cardDetails.map((card, index) => (
            <div className="max-w-96 py-2" key={index}>
              <CardDefault
                detail={card}
                key={index}
                className="pt-5"
                button={true}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 bg-gray-300 rounded-3xl mt-4">
        <div className="flex flex-col items-center">
          <Typography
            variant="h2"
            component="h2"
            className="text-2xl lg:text-3xl"
            color="blue"
          >
            Testimonies
          </Typography>
        </div>
        <div className="lg:mx-8 mt-4 mx-2 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000, // Set delay to 3000ms (3 seconds)
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
              pauseOnMouseEnter: true, // Pause autoplay on mouse enter
            }}
            loop={true}
          >
            <SwiperSlide>
              <Zoom>
                <TestimonialCard />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <TestimonialCard />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <TestimonialCard />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <TestimonialCard />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <TestimonialCard />
              </Zoom>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="justify-center items-center flex pt-10">
          <Button color="blue">
            <Link to="contact">Share Your Testimony with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
