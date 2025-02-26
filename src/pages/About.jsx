import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { AccordionCard } from "../components/Accordion";
import { Typography } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery1 from "../assets/images/Gallery.jpg";
import Gallery2 from "../assets/images/Gallery1.jpg";
import Gallery3 from "../assets/images/Gallery2.jpg";
import Gallery4 from "../assets/images/447701799_761325279542686_9107505870042878829_n.jpg";
import Gallery5 from "../assets/images/448607947_769241348751079_6258669683239261172_n.jpg";
import { departments } from "../Utils/data";
import { CardDefault } from "../components/Card";

export default function About() {
  const images = [
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery3,
      thumbnail: Gallery3,
    },
    {
      original: Gallery4,
      thumbnail: Gallery4,
    },

    {
      original: Gallery5,
      thumbnail: Gallery5,
    },
  ];

  return (
    <main>
      <div className="min-h-screen py-4 mx-4">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4">
          {/* Introduction Section */}
          <div className="text-center mb-12 font-yantramanav">
            <TypeAnimation
              sequence={[`Who are we?`, 5000]}
              speed={15}
              style={{
                fontSize: "2em",
                color: "black",
                fontWeight: "bold",
              }}
              repeat={1}
              cursor={false}
            />
            <div className="border-b-2 pb-3 border-b-deep-orange-50"></div>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to Share The Love Center! Are you seeking for truth and
              wisdom of the doctrines of God? Draw closer to him by learning
              from a servant of God. John CW is a person with a deep desire to
              build the church of God in the realm of wisdom operating under the
              Revelation of God. We are a vibrant community of believers
              dedicated to living out the teachings of Jesus Christ. Our church
              is a place where you can find hope, grow in faith, and build
              meaningful relationships.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 font-yantramanav">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is to spread the love and message of Jesus Christ,
              nurture spiritual growth, and serve our community with compassion
              and grace. We strive to be a beacon of hope and a source of
              strength for all who seek it.
            </p>
          </div>

          {/* Values Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 font-yantramanav">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Faith
                </h3>
                <p className="text-gray-600">
                  We are committed to deepening our faith and relationship with
                  God through worship, prayer, and study of the Bible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Community
                </h3>
                <p className="text-gray-600">
                  We believe in fostering a strong sense of community where
                  everyone feels welcome and valued.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Service
                </h3>
                <p className="text-gray-600">
                  We are dedicated to serving others, both within our church
                  family and in the broader community.
                </p>
              </div>
            </div>
          </div>

          {/* Ministries Section */}
          <div className="text-center pb-5">
            <h2 className="text-2xl font-bold text-blue-600 mb-3 font-yantramanav">
              Our Ministries
            </h2>
            <p className="text-lg text-gray-700 border-b-2 pb-5  border-b-deep-orange-50">
              We offer a variety of ministries to meet the spiritual, emotional,
              and physical needs of our congregation and community. These
              include youth programs, adult education, outreach missions, and
              more.
            </p>
          </div>

          {/* Departments Section */}
          <div className="text-center ">
            <Fade>
              <h2 className="text-3xl pt-4 font-bold text-blue-600 font-yantramanav  mb-4">
                Departments
              </h2>
            </Fade>
            <div className="">
              <div className="justify-center flex-col items-center py-5  px-4 bg-gray-300 rounded-2xl lg:flex-row ">
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
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                >
                  {departments.map((department, index) => (
                    <SwiperSlide key={index}>
                      <CardDefault detail={department} floating={false} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="border-b-2 pb-4 border-b-deep-orange-50"></div>
          <div className="pt-8 pb-2 text-center">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <Fade>
                <h2 className="text-3xl text-center font-semibold text-blue-600 pb-4  font-yantramanav">
                  Gallery
                </h2>
              </Fade>
              <div className="flex justify-center items-center">
                <div className="w-full md:w-3/4 lg:w-1/2">
                  <Fade>
                    <ReactImageGallery
                      items={images}
                      showThumbnails={true}
                      lazyLoad={true}
                      showPlayButton={false}
                      showFullscreenButton={true}
                      autoPlay={true}
                    />
                  </Fade>
                </div>
              </div>
            </Fade>
            <div className="border-b-2 pb-4 border-b-deep-orange-50"></div>
          </div>
          <Fade>
            <div className="items-center text-center p-4">
              <Typography
                variant="h2"
                component="h2"
                className="text-2xl lg:text-3xl font-yantramanav"
                color="blue"
              >
                FAQ
              </Typography>

              <div className="my-4 px-8 rounded-lg">
                <AccordionCard />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
