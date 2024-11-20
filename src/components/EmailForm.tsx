"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5001";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/send-email`, {
        email,
        name,
        subject,
        text,
      });
      setStatus("Email sent successfully");
    } catch (error) {
      setStatus("Error sending email");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[70%] md:w-2/3 lg:w-1/2"
      >
        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-white text-2xl mb-1 font-kanit font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>

        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-white text-2xl mb-1 font-kanit font-medium"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-white text-2xl mb-1 font-kanit font-medium"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block text-white text-2xl mb-1 font-kanit font-medium"
          >
            Message:
          </label>
          <textarea
            id="text"
            rows={5}
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out resize-vertical placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <motion.button
            type="submit"
            className="bg-[#76ABAE] text-white font-kanit border-none rounded-lg px-5 py-2.5 text-2xl w-2/5 cursor-pointer transition-transform duration-200 ease-in-out mb-6 active:bg-white active:text-[#222831] focus:outline-none focus:text-white disabled:opacity-50"
            whileTap={{ scale: isLoading ? 1 : 0.9 }}
            whileHover={
              isLoading
                ? {}
                : {
                    scale: 1.1,
                    backgroundColor: "#ffffff",
                    color: "#222831",
                  }
            }
            disabled={isLoading}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Send Email"}
          </motion.button>
        </div>

        {/* Status Message */}
        {status && (
          <p
            className={`text-center text-2xl mt-1 ${
              status.includes("successfully")
                ? "text-[#8bced2]"
                : "text-[#FF5353]"
            } font-kanit`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default EmailForm;