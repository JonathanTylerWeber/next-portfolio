import { FaLink } from "react-icons/fa";
import Image from "next/image";
import MagnetLink from "./MagnetLink";
import FadeInOnScroll from "./FadeInOnScroll";
import portfolio2 from "../../public/portfolio2.jpg";

const AboutBody = () => {
  return (
    <>
      <div className="w-full relative bg-[#222831] z-10 pt-24 lg:pt-40">
        <div className="pb-20">
          <div className=" mx-auto">
            <FadeInOnScroll>
              <h1 className="text-center text-white font-kanit font-semibold mb-4 text-4xl md:text-6xl lg:text-8xl pb-10 lg:pb-20">
                About Me
              </h1>
            </FadeInOnScroll>

            <div className="flex flex-wrap mb-8 md:mb-16 lg:mb-20">
              <div className="w-full xl:w-1/2 flex items-center justify-center pb-10 px-10 md:px-20 xl:px-0">
                <FadeInOnScroll>
                  <p className="text-white font-kanit font-light md:text-2xl lg:text-3xl xl:pl-48 lg:leading-normal pb-6 text-justify">
                    Born in Los Angeles, I moved to Chengdu, China in 2018. Over
                    the years, I worked as an English Teacher and did freelance
                    audio recording and engineering. Eventually, I met my wife,
                    and when we decided to move back to the United States in
                    2023, I started learning programming to secure a future for
                    us.
                  </p>
                  <p className="text-white font-kanit font-light md:text-2xl lg:text-3xl pb-10 xl:pb-0 xl:pl-48 lg:leading-normal text-justify">
                    Now I&apos;m back in the US in Pollock, Louisiana with my
                    wife and my brother. Since completing the Springboard
                    Software Engineering Bootcamp I&apos;ve done various
                    freelance work, and currently am working with Manafall.
                  </p>
                </FadeInOnScroll>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="flex items-center justify-center h-auto px-10 md:px-0 md:pr-0 lg:pr-5 xl:pr-40">
                  <FadeInOnScroll>
                    <Image
                      src={portfolio2}
                      alt="Picture of Jonathan"
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                      className="rounded-lg"
                      placeholder="blur"
                    />
                  </FadeInOnScroll>
                </div>
              </div>
            </div>

            <FadeInOnScroll>
              <div className="flex justify-center items-center mb-8 md:mb-16 lg:mb-20">
                <MagnetLink>
                  <a
                    href="/JonathanWeberResume.pdf"
                    download="JonathanWeberResume.pdf"
                    className="text-[#8bced2] font-kanit text-5xl relative hover:text-white"
                  >
                    <span>
                      Resume
                      <FaLink className="ml-5 inline" />
                    </span>
                  </a>
                </MagnetLink>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p className="text-white font-kanit font-light md:text-2xl lg:text-3xl px-10 md:px-20 xl:px-52 lg:leading-normal text-justify">
                When I&apos;m not programming, I spend time with our four cats,
                playing D&D with friends, and frequenting the nearby bouldering
                gyms. For the past ten years, I&apos;ve been making and
                producing my own music and videos. Music has always been a
                central passion of mine, spanning genres from jazz and funk to
                electronic and hip-hop. Whether programming or playing music,
                I&apos;m always trying to learn new things to push myself and
                gain new creative tools.
              </p>
            </FadeInOnScroll>

            <div className="flex justify-center items-center mt-16 md:mt-32 lg:mt-32 mb-8">
              <video controls className="h-48 w-auto md:h-[300px] lg:h-[500px]">
                <source src="music-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
