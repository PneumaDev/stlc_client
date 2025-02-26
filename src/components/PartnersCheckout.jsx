import PaymentCard from "./PaymentCard.jsx";
import Marquee from "react-fast-marquee";
import { CardDefault } from "./Card.jsx";
import { projectDetails } from "../Utils/data.js";

export default function PartnersCheckout() {
  return (
    <div>
      <div className="py-5 text-center mx-auto bg-cyan-50 rounded-lg">
        <div className="w-full lg:w-2/3 mx-auto rounded-lg overflow-hidden">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 font-yantramanav">
              We value your partnership.
            </h2>
            <p className="text-lg text-gray-700 mx-4">
              Our mission is to spread the love and message of Jesus Christ,
              nurture spiritual growth, and serve our community with compassion
              and grace. We strive to be a beacon of hope and a source of
              strength for all who seek it.
            </p>
          </div>
          <div className="text-center m-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-2 font-yantramanav">
              Why partner with us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Make a Difference
                </h3>
                <p className="text-gray-600">
                  Your partnership helps provide essential services, such as
                  food, clothing, education, and emotional support to those in
                  need.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Community Impact
                </h3>
                <p className="text-gray-600">
                  Join hands with us to create a stronger, more resilient
                  community where everyone feels loved, valued, and supported.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Collaborative Opportunities
                </h3>
                <p className="text-gray-600">
                  We offer unique opportunities for businesses, organizations,
                  and individuals to collaborate, contribute, and grow together.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center m-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-2 font-yantramanav">
              How You Can Get Involved?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Corporate Sponsorship
                </h3>
                <p className="text-gray-600">
                  Align your brand with our mission and show your commitment to
                  social responsibility.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Volunteering
                </h3>
                <p className="text-gray-600">
                  Encourage your team to give back by volunteering at our events
                  and programs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-muktaVaani">
                  Donations
                </h3>
                <p className="text-gray-600">
                  Financial support, in-kind donations, and fundraising
                  initiatives are all ways to make a direct impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee for Projects */}
      <div className="my-10">
        <Marquee pauseOnHover speed={50} gradient={false}>
          {projectDetails.map((projectDetail, index) => (
            <div key={index} className="mx-4 text-center w-80">
              <CardDefault detail={projectDetail} floating={false} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Payment Section */}
      <div className="pt-10  md/lg:flex-row justify-center gap-20 mx-2 items-center justify-items-center">
        <div className="grid items-center place-items-center">
          <PaymentCard />
        </div>
      </div>
    </div>
  );
}
