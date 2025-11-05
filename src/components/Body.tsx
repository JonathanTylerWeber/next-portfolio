"use client";

import Link from "next/link";
import Project from "./Project";
import MagnetLink from "./MagnetLink";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Body() {
  return (
    <div className="relative w-full bg-[#222831]" id="body">
      {/* Main Content */}
      <div className="relative z-10 pt-20 lg:pt-40 pb-20 px-2 lg:px-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <FadeInOnScroll>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 pb-20 lg:pb-40 w-full">
              <div className="lg:col-span-2">
                <p className="text-xl md:text-2xl lg:text-3xl px-0 md:px-10 text-white leading-normal tracking-wide font-light text-justify">
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
                    {"< AboutMe />"}
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

          {/* Projects */}
          <Project
            video="/ScrivnrVid.mp4"
            alt={"scrivnr marketing site"}
            projName={"Scrivnr"}
            projDesc={
              "The Scrivnr Marketing Site is a responsive, SEO-optimized platform I helped build from the ground up at Manafall, alongside Scrivnr’s client application. I implemented the UI based on the design team’s vision, ensuring a seamless, accessible, and high-performance experience that aligns with the brand’s identity. The site is fully integrated with a content management system, allowing the client to easily update and manage their own content, and features subtle motion and interaction design to create a polished, engaging user experience."
            }
            tech={
              "Next.js, React 19, TypeScript, Tailwind CSS, Framer Motion, Radix UI, Shadcn, Strapi CMS, React Hook Form, Zod, Nodemailer, Lucide React, Embla Carousel, Remark/Markdown, ESLint, Prettier"
            }
            projLink={"https://www.scrivnr.com/"}
          />

          <Project
            video="/LegibillVid.mp4"
            alt={"legibill"}
            projName={"Legibill"}
            projDesc={
              "Legibill is an open-source web application that allows users to explore and track legislation across the United States. It integrates with the LegiScan API to provide detailed information on bills, their history, sponsors, and legislative progress. Users can search by keyword, filter by state and year, and view which bills each legislator has sponsored. I contributed to the project by integrating NextUI, adding key features on the backend, and optimizing large API responses from LegiScan to significantly enhance performance and data handling efficiency."
            }
            tech={
              "Next.js, React, TypeScript, Prisma, PostgreSQL, NextAuth, Tailwind CSS, NextUI, Framer Motion, bcrypt"
            }
            projLink={"https://www.legibill.org/"}
            gitLink={"https://github.com/SevanBadal/legibill"}
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
    </div>
  );
}
