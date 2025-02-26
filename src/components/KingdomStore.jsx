import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ProductCard } from "./ProductCard";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

// Product Data
const products = [
  {
    image:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    name: "Praying Generation T-Shirt",
    price: "Ksh.1000",
    description:
      "By purchasing, you contribute to the ministry and outreach programs that help us serve the community.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    name: "Faith Over Fear Hoodie",
    price: "Ksh.1000",
    description:
      "A cozy hoodie to remind you of faith over fear. All proceeds go to our outreach programs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    name: "Faith Over Fear Hoodie",
    price: "Ksh.1000",
    description:
      "A cozy hoodie to remind you of faith over fear. All proceeds go to our outreach programs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    name: "Faith Over Fear Hoodie",
    price: "Ksh.1000",
    description:
      "A cozy hoodie to remind you of faith over fear. All proceeds go to our outreach programs.",
  },
];

export default function KingdomStore() {
  return (
    <div className="pt-5">
      {/* Title */}
      <div className="text-center">
        <h1 className="font-muktaVaani text-2xl border-b-2 border-blue-gray-100 pb-3 my-4">
          Kingdom Store
        </h1>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full">
        <Swiper
          spaceBetween={20} // Reduce space for better alignment
          slidesPerView={1} // Default for small screens
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex justify-center pb-8">
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View More Button */}
      <div className="flex justify-center items-center pt-4">
        <Link to="/store">
          <Button color="blue">View More Products</Button>
        </Link>
      </div>
    </div>
  );
}
