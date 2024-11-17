import { FaLink, FaGithub } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";
import Link from "next/link";
import MagnetLink from "./MagnetLink";

interface ProjectProps {
  alt: string;
  projName: string;
  projDesc: string;
  tech: string;
  video: string;
  projLink: string;
  gitLink: string;
}

export default function Project({
  alt,
  projName,
  projDesc,
  tech,
  video,
  projLink,
  gitLink,
}: ProjectProps) {
  const isMobile = useIsMobile();

  return (
    <div className="mt-20 bg-[#191f25] rounded-lg flex flex-col items-center shadow-2xl">
      <video
        className="w-full max-h-[40em] rounded-t-lg object-cover"
        src={video}
        autoPlay
        loop
        muted
        aria-label={alt}
      />
      <div className="p-16">
        <p className="text-5xl pb-5 font-semibold text-[#8bced2] font-kanit">
          {projName}
        </p>
        <p className="text-2xl pb-5 font-light text-white font-kanit">
          {projDesc}
        </p>
        <p className="text-xl pb-5 text-gray-400 font-kanit">{tech}</p>
        <p className="text-xl pb-5 font-light text-white">
          (The site is deployed on render, please allow 15-30s for the page to
          load and to signup/login)
        </p>
        <div className="flex justify-around mt-12 px-20">
          <MagnetLink>
            <Link
              href={projLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8bced2] text-6xl inline-block font-kanit hover:text-white"
            >
              <FaLink />
            </Link>
          </MagnetLink>
          <MagnetLink>
            <Link
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8bced2] text-6xl inline-block font-kanit hover:text-white"
            >
              <FaGithub />
            </Link>
          </MagnetLink>
        </div>
      </div>
    </div>
  );
}