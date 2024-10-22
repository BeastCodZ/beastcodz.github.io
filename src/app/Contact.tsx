"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import emailjs from "emailjs-com";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [formSize] = useState("medium");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const showMailIcon = () => {
    const mailIcon = document.createElement("span");
    mailIcon.innerHTML = "📧";
    mailIcon.style.position = "absolute";
    mailIcon.style.fontSize = "40px";
    if (buttonRef.current) {
      mailIcon.style.left = `${
        buttonRef.current.getBoundingClientRect().left + 20
      }px`;
      mailIcon.style.top = `${buttonRef.current.getBoundingClientRect().top}px`;
    }
    document.body.appendChild(mailIcon);

    anime({
      targets: mailIcon,
      translateY: -200,
      translateX: 200,
      opacity: [1, 0],
      easing: "easeInOutQuart",
      duration: 1000,
      complete: () => {
        mailIcon.remove();
      },
    });
  };

  const animateButton = () => {
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        scale: [1, 0],
        opacity: [1, 0],
        translateY: -100,
        easing: "easeInOutQuart",
        duration: 300,
        complete: () => {
          showMailIcon();
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    animateButton();

    const fullMessage = `Email: ${formData.email}\n\n${formData.message}`;
    const emailData = {
      from_name: formData.from_name,
      message: fullMessage,
    };
    console.log(process.env)
    try {
      await emailjs.send(
        process.env.EMAIL_SERVICE as string || 'default_service',
        process.env.EMAIL_TEMPLATE as string || 'default_template',
        emailData,
        process.env.EMAIL_USER as string || 'default_user'
      );
      setIsFadingOut(true);
      setTimeout(() => {
        setIsFormVisible(false);
        setSubmissionStatus("Message Sent!");
      }, 300);
    } catch (error) {
      console.error("Email sending failed", error);
      setSubmissionStatus("Message failed to send.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-8 py-16"
    >
      {isFormVisible && (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg text-black shadow-lg transition-all duration-300 ${
            formSize === "small" ? "h-20" : ""
          }`}
        >
          <h2 className="text-4xl text-white font-bold mb-8 text-center">
            Get in Touch
          </h2>
          <motion.input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 mb-4 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 focus:border-blue-500 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 mb-4 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 focus:border-blue-500 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-2 mb-4 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 focus:border-blue-500 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.button
            type="submit"
            ref={buttonRef}
            disabled={isSubmitting}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative inline-flex items-center justify-center p-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group w-full h-12 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-600 hover:bg-blue-700"
            }`}
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-blue-700 duration-300 -translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center bg-gray-800 w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>

            <span className="relative invisible">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </motion.button>
        </motion.form>
      )}
      <div className="bg-gray-800 rounded-xl">
        {submissionStatus && (
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-l text-green-500">{submissionStatus}</p>
          </div>
        )}
        <div className="flex p-2 m-2">
          <motion.a
            href="https://linkedin.com/in/beastcodz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-white hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://instagram.com/beastcodz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-white hover:bg-blue-600 transition duration-300"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://github.com/beastcodz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-white hover:bg-blue-600 transition duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
