"use client";

import Link from "next/link";
import Project from "./Project";
import MagnetLink from "./MagnetLink";
import FadeInOnScroll from "./FadeInOnScroll";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Body() {
  const body = useRef(null);
  const { scrollYProgress } = useScroll({
    target: body,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div className="w-full relative bg-[#222831] z-30" id="body" ref={body}>
      <div className="pt-20 lg:pt-40 pb-20 px-2 lg:px-20 relative bg-[#222831]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <FadeInOnScroll>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 pb-20 lg:pb-40 w-full">
              <div className="lg:col-span-2">
                <p className="text-xl md:text-2xl lg:text-3xl px-0 md:px-10 text-white leading-normal tracking-wide font-light">
                  Dedicated to creating impactful web applications that merge
                  design, functionality, and seamless user interaction. With a
                  strong foundation in both front-end and back-end technologies,
                  I specialize in developing intuitive, responsive, and
                  efficient web apps.
                </p>
              </div>
              <div className="flex justify-center items-center lg:col-span-1 w-full">
                <MagnetLink>
                  <Link
                    href="/about"
                    className="text-4xl lg:text-5xl text-[#8bced2] font-kanit hover:text-white whitespace-nowrap"
                  >
                    {"< aboutMe />"}
                  </Link>
                </MagnetLink>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-5xl md:text-7xl lg:text-8xl text-[#8bced2] font-semibold text-center whitespace-nowrap">
              Recent Projects
            </p>
          </FadeInOnScroll>

          <Project
            video="/proseVid.mp4"
            alt={"prose website"}
            projName={"Prose Perfector"}
            projDesc={
              "Prose Perfector is a web application designed to enhance the writing skills of its users using OpenAI's API. It offers a seamless experience where writers can securely sign up, submit their writing pieces for evaluation, and receive detailed feedback. Key features include the ability to specify the type of writing and desired style, obtaining ratings, and receiving a rewritten version of their text for clarity and style improvement. Users can manage their profiles, view submission history, and benefit from robust authentication and password security measures."
            }
            tech={
              "React, React Bootstrap, Vite, Node.js, Express, PostgreSQL, OpenAI API, ViteTest, Jest, JWT (jsonwebtoken, jwt-decode), bcrypt, jsonschema, axios, Font Awesome"
            }
            projLink={"https://capstone-2-cetn.onrender.com/"}
            gitLink={"https://github.com/JonathanTylerWeber/capstone-2"}
          />

          <Project
            video="/translateVid.mp4"
            alt={"translate website"}
            projName={"Translate Web App"}
            projDesc={
              "The Translate Web App is a comprehensive tool designed for seamless translation between English and Chinese languages. Utilizing the Google Cloud Translate API, users can input text to receive accurate translations along with phonetic spellings (pinyin). Key features include user authentication, translation history management, saving and unsaving of translations, and password reset functionality."
            }
            tech={
              "HTML, CSS, Bootstrap, JavaScript, Flask (Python), PostgreSQL, Google Cloud Translate, Flask-DebugToolbar, Flask-Bcrypt, Xpinyin, Mailjet, Python-dotenv, Jinja, Font Awesome"
            }
            projLink={"https://translate-e40f.onrender.com/"}
            gitLink={"https://github.com/JonathanTylerWeber/capstone-1"}
          />
        </div>
      </div>
      <motion.div style={{ height }} className="relative bg-[#222831]">
        <div
          className="
            absolute w-full bg-[#222831] z-10 
            shadow-[0px_60px_50px_rgba(0,0,0,0.748)] 
            rounded-bl-[75%] rounded-br-[75%] h-[750%] 
            md:rounded-bl-[50%] md:rounded-br-[50%] md:h-[3000%]
          "
        ></div>
      </motion.div>
    </div>
  );
}

export default Body;
