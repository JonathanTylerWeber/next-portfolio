import React from "react";
import EmailForm from "./EmailForm";
import FadeInOnScroll from "./FadeInOnScroll";

const ContactBody: React.FC = () => {
  return (
    <div className="bg-[#222831] min-h-screen pt-48 md:pt-16 lg:pt-40">
      <FadeInOnScroll>
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center font-kanit font-semibold text-[calc(1.5vw+5em)] pb-2.5">
            Contact Me
          </h1>
          <EmailForm />
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default ContactBody;
