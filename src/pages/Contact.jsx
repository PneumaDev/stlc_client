import React from "react";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="my-8 mx-4 p-4 sm:p-2 bg-blue-gray-400 lg:mx-10 rounded-lg">
      <div className="">
        <div className="text-center font-im pt-4">
          <TypeAnimation
            sequence={[`Contact Us Today!`, 5000]}
            speed={50}
            style={{
              fontSize: "1.5em",
              color: "black",
              fontWeight: "bold",
              font: "imprima",
            }}
            repeat={1}
            cursor={false}
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
