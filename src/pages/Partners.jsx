import React from "react";
import { TypeAnimation } from "react-type-animation";
import PartnersCheckout from "../components/PartnersCheckout";
import KingdomStore from "../components/KingdomStore";

function Partners() {
  return (
    <>
      <div className="min-h-screen sm:mx-4 md:mx-4 lg:mx-20">
        <div className="my-8 pt-4 mx-4 pb-6 bg-lime-100 rounded-xl">
          <div className="">
            <div className="text-center font-yantramanav ">
              <div className="border border-b-1  border-b-purple-500">
                <TypeAnimation
                  sequence={[`Become A Partner today!`, 5000]}
                  speed={50}
                  style={{
                    fontSize: "1.5em",
                    color: "black",
                    fontWeight: "bold",
                    font: "yantamarav",
                  }}
                  repeat={1}
                  cursor={false}
                />
              </div>

              <p className="p-4">
                Let everyone give as his heart tells him, neither grudgingly nor
                under compulsion, for God loves the man who gives cheerfully.
              </p>
              <p className="italic font-semibold mb-4">(2 Corinthians 9:7)</p>
            </div>
          </div>
          <div className="">
            {" "}
            <PartnersCheckout />
          </div>
        </div>
        <KingdomStore />
      </div>
    </>
  );
}

export default Partners;
