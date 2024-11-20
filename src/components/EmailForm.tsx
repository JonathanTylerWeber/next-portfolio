"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import Toast from "./Toast";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setToast(null);

    try {
      const response = await axios.post("/api/send", {
        email,
        name,
        subject,
        text,
      });

      if (response.status === 200) {
        setToast({ message: "Email sent successfully!", type: "success" });
        setEmail("");
        setName("");
        setSubject("");
        setText("");
      } else {
        setToast({
          message: "Unexpected response from server.",
          type: "error",
        });
      }
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      if (axios.isAxiosError(error) && error.response) {
        setToast({
          message: error.response.data.message || "Error sending email.",
          type: "error",
        });
      } else if (error instanceof Error) {
        setToast({
          message: error.message || "Error sending email.",
          type: "error",
        });
      } else {
        setToast({ message: "An unexpected error occurred.", type: "error" });
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[95%] md:w-4/5 lg:w-3/5 xl:w-1/2"
        >
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
              className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 pl-4 md:text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>

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
              className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 pl-4 md:text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>

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
              className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 pl-4 md:text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out mb-6 placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>

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
              className="text-white bg-[#191f25] border border-transparent rounded-lg p-2 pl-4 md:text-2xl w-full box-border leading-6 transition-colors duration-200 ease-in-out resize-vertical placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>

          <div className="flex justify-center mt-4 pb-40">
            <motion.button
              type="submit"
              className="bg-[#76ABAE] text-white font-kanit border-none rounded-lg px-5 py-2.5 text-2xl w-3/5 md:w-2/5 cursor-pointer transition-transform duration-200 ease-in-out mb-6 active:bg-white active:text-[#222831] focus:outline-none focus:text-white disabled:opacity-50"
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
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Send Email"
              )}
            </motion.button>
          </div>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default EmailForm;
