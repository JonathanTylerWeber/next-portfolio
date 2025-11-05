import { FaLink, FaGithub } from "react-icons/fa";
import Link from "next/link";
import MagnetLink from "./MagnetLink";

interface ProjectProps {
  alt: string;
  projName: string;
  projDesc: string;
  tech: string;
  video: string;
  projLink: string;
  gitLink?: string;
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
  return (
    <div className="mt-20 bg-[#191f25] rounded-lg flex flex-col items-center shadow-[-2px_4px_25px_-1px_rgba(0,0,0,0.75)] relative">
      <video
        className="w-full max-h-[40em] rounded-t-lg object-cover pointer-events-none"
        src={video}
        autoPlay
        loop
        muted
        aria-label={alt}
      />
      <div className="p-7 md:p-12 lg:p-16">
        <p className="text-3xl lg:text-5xl pb-5 font-semibold text-[#8bced2] font-kanit">
          {projName}
        </p>
        <p className="md:text-xl lg:text-2xl pb-5 font-light text-white font-kanit text-justify">
          {projDesc}
        </p>
        <p className="lg:text-xl pb-5 text-gray-400 font-kanit">{tech}</p>
        <div className="flex justify-around md:mt-12 lg:px-20">
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
          {gitLink && (
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
          )}
        </div>
      </div>
    </div>
  );
}
