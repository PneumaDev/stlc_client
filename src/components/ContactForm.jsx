import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Cookies from "js-cookie";

const ContactForm = () => {
  // Initialize state with default values
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
    contact: "",
    subscribe: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false)

  // Use ref to focus on the first input when component mounts
  const messageRef = useRef(null);
  const nameRef = useRef(null);

  // Fetch cookies and set form data on component mount
  useEffect(() => {
    const nameCookie = Cookies.get("name") || "";
    const emailCookie = Cookies.get("email") || "";
    const contactCookie = Cookies.get("contact") || "";

    setFormData((prevData) => ({
      ...prevData,
      name: nameCookie,
      email: emailCookie,
      contact: contactCookie,
    }));

    // Focus on the first input element
    nameCookie ? messageRef.current.focus() : nameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    setSubmitting(true)
    e.preventDefault();

    // Set cookies for name, email, and contact
    Cookies.set("name", formData.name, { expires: 7 }); 
    Cookies.set("email", formData.email, { expires: 7 });
    Cookies.set("contact", formData.contact, { expires: 7 });

    try {
      const response = await fetch("/api/user/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    setFormSubmitted(true);

      const responseData = await response.json();
      console.log("Response data:", responseData);
    } catch (error) {
      console.error("Error during form submission:", error.message);
    }

    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="container mx-auto py-8">
      <CSSTransition
        in={!formSubmitted}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-100 shadow-xl drop-shadow-2xl rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-gray-700 font-muktaVaani"
              >
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full font-imprima px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-gray-700 font-muktaVaani"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full font-imprima px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block mb-1 text-gray-700 font-muktaVaani"
              >
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Your Phone Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full font-imprima px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-1 text-gray-700 font-muktaVaani"
              >
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                value={formData.message}
                placeholder="Enter your message"
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 font-imprima rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mr-2 form-checkbox text-blue-500"
              />
              <label
                htmlFor="subscribe"
                className="text-gray-700 font-muktaVaani"
              >
                Subscribe to newsletter
              </label>
            </div>
            <div className="flex justify-center">
              <button
                disabled={submitting}
                type="submit"
                className="bg-blue-500 font-muktaVaani text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                {
                  submitting ? "Submitting" : "Submit"
                }
              </button>
            </div>
          </div>
        </form>
      </CSSTransition>
      <CSSTransition
        in={formSubmitted}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 font-imprima">
            Thank you for your message!
          </h3>
          <p className="text-gray-600 font-imprima">
            We will get back to you as soon as possible.
          </p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ContactForm;
