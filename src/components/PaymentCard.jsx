import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js"; // Import PayPal components
import Mpesa from "../assets/images/M-PESA.png";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentCard() {
  const contactCookie = Cookies.get("contact") || "";

  const [type, setType] = React.useState("mpesa");
  const [phoneNumber, setPhoneNumber] = React.useState(contactCookie);
  const [amount, setAmount] = React.useState("");
  const [reference, setReference] = React.useState("Offering");
  const [loading, setLoading] = React.useState(true); // State to handle PayPal SDK load
  const [processingPayment, setProcessingPayment] = React.useState(false);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Refs for Mpesa and PayPal sections
  const paypalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate PayPal SDK loading for example
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a specific section
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const lipaNaMpesa = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !amount) {
      return Promise.reject(new Error("Missing values"));
    }

    setProcessingPayment(true);

    const paymentData = {
      sender_phone: phoneNumber,
      payBillOrTillNumber: "174379",
      amount: amount,
      account_reference: reference,
      callback_url: "https://your-callback-url.com",
    };

    try {
      const response = await fetch(backendUrl + "/api/user/mpesa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const responseData = await response.json();
      console.log("Response data:", responseData);
      if (responseData.CustomerMessage) {
        Cookies.set("contact", paymentData.sender_phone, { expires: 7 });
        return responseData.CustomerMessage;
      } else {
        if (responseData.error === "connect ETIMEDOUT 45.223.139.195:443") {
          throw new Error("Failed. Check your connection.");
        } else {
          throw new Error("Failed. Kindly try again");
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error connecting to the server!");
    } finally {
      setProcessingPayment(false); // Reset processing state in finally block
    }
  };

  const handleLipaNaMpesaPayment = (e) => {
    console.log(amount);
    toast.promise(
      lipaNaMpesa(e),
      {
        loading: "Processing...",
        success: "Success. Payment processed!",
        error: (error) =>
          error.message || "Error when fetching payment details!",
      },
      {
        id: "toast",
      }
    );
  };

  const handleApprove = (orderId) => {
    console.log("Order approved with ID:", orderId);
  };

  const handleTabClick = (paymentType) => {
    setType(paymentType);
    if (paymentType === "paypal") {
      scrollToRef(paypalRef);
    }
  };

  return (
    <div className="flex gap-x-10">
      {isMd && (
        <div className="flex">
          <img
            src="https://www.islamic-relief.org.uk/wp-content/smush-webp/2022/12/food-hero.jpg.webp"
            alt="Humanitarian Aid"
            className="w-full h-auto rounded-lg shadow-lg object-cover hidden md:block"
          />
        </div>
      )}
      <Card
        className="w-full grid max-w-[30rem] shadow-xl rounded-lg border border-gray-200"
        ref={paypalRef}
      >
        <Toaster toastOptions={{ className: "font-yantramanav" }} />
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="grid place-items-center px-6 py-8 text-center bg-gradient-to-r from-blue-600 to-blue-700"
        >
          <div className="mb-4 h-20 p-6 text-white">
            {type === "paypal" && (
              <CreditCardIcon className="h-10 w-10 text-white" />
            )}
            {type === "mpesa" && (
              <img alt="Mpesa" className="w-32" src={Mpesa} />
            )}
          </div>
          <Typography
            variant="h4"
            color="white"
            className="font-bold font-imprima"
          >
            Partner
          </Typography>
        </CardHeader>

        <CardBody className="p-8 overflow-auto">
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0">
              <Tab
                value="mpesa"
                onClick={() => handleTabClick("mpesa")}
                className="text-indigo-600 font-semibold font-yantramanav"
              >
                Mpesa
              </Tab>
              <Tab
                value="paypal"
                onClick={() => handleTabClick("paypal")}
                className="text-indigo-600 font-semibold font-yantramanav"
                disabled={loading} // PayPal tab is disabled if loading
              >
                PayPal or Card
              </Tab>
            </TabsHeader>

            <TabsBody className="!overflow-x-hidden !overflow-y-hidden mt-4 font-yantramanav">
              {/* Mpesa Payment Panel */}
              <TabPanel value="mpesa" className="p-0 overflow-hidden">
                <div>
                  <form className="mt-6 flex flex-col gap-6">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-semibold font-muktaVaani"
                      >
                        Phone Number
                      </Typography>
                      <Input
                        required
                        maxLength={13}
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="+254 712 345 678"
                        className="!border-t-gray-300 focus:!border-t-indigo-500"
                      />
                    </div>

                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-semibold font-muktaVaani"
                      >
                        Amount
                      </Typography>
                      <Input
                        required
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="Amount"
                        className="!border-t-gray-300 focus:!border-t-indigo-500"
                      />
                    </div>

                    <div className="max-w-72 mt-2">
                      <Select
                        className="font-yantramanav text-sm"
                        label="Reference"
                        value={reference}
                        onChange={(val) => setReference(val)}
                      >
                        <Option value="Offering" className="font-yantramanav">
                          Offering
                        </Option>
                        <Option value="Tithe" className="font-yantramanav">
                          Tithe
                        </Option>
                        <Option value="Donation" className="font-yantramanav">
                          Donation
                        </Option>
                        <Option
                          value="Partnership"
                          className="font-yantramanav"
                        >
                          Partnership
                        </Option>
                        <Option value="Other" className="font-yantramanav">
                          Other
                        </Option>
                      </Select>
                    </div>

                    <Button
                      disabled={processingPayment}
                      type="submit"
                      size="lg"
                      className="mt-4 font-yantramanav bg-green-500 hover:bg-green-600 transition duration-200"
                      onClick={handleLipaNaMpesaPayment}
                    >
                      {processingPayment ? "Processing..." : "Pay with Mpesa"}
                    </Button>

                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center justify-center gap-2 font-medium font-imprima"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </div>
              </TabPanel>

              {/* PayPal Payment Panel */}
              <TabPanel value="paypal" className="p-2 overflow-hidden">
                <div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-semibold font-imprima"
                    >
                      Amount
                    </Typography>
                    <Input
                      required
                      maxLength={13}
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      placeholder="Amount"
                      className="!border-t-gray-300 focus:!border-t-indigo-500 font-muktaVaani"
                    />
                  </div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="my-4 font-bold font-imprima"
                  >
                    Choose your payment method
                  </Typography>

                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AfEo_UNdo-Rzjjd_gE__U5m7MtZw5S-iG91pl-crQaM1xEeh0VxnAoRFHEJsWnK1lgbABth3oW0tvoEC",
                      currency: "USD",
                    }}
                  >
                    <PayPalButtons
                      forceReRender={[amount]}
                      className="rounded-md"
                      style={{ layout: "vertical" }}
                      createOrder={(data, actions) => {
                        console.log("Amount inside createOrder:", amount); // This will now log the updated amount

                        // Check if the amount is valid before proceeding
                        if (
                          !amount ||
                          isNaN(amount) ||
                          parseFloat(amount) <= 0
                        ) {
                          toast.error("Please enter a valid amount.");
                          return;
                        }

                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: amount, // Correct value of amount used here
                              },
                            },
                          ],
                          application_context: {
                            shipping_preference: "NO_SHIPPING",
                          },
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          handleApprove(details.id);
                        });
                      }}
                    />
                  </PayPalScriptProvider>

                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium font-imprima"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>

      {isMd && (
        <div className="flex">
          <img
            src="https://www.islamic-relief.org.uk/wp-content/smush-webp/2022/12/food-hero.jpg.webp"
            alt="Humanitarian Aid"
            className="w-full h-auto rounded-lg shadow-lg object-cover hidden md:block"
          />
        </div>
      )}
    </div>
  );
}
