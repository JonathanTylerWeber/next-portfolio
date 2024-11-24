import React from "react";
import EmailForm from "./EmailForm";
import FadeInOnScroll from "./FadeInOnScroll";

const ContactBody: React.FC = () => {
  return (
    <div className="bg-[#222831] min-h-screen pt-24 lg:pt-40">
      <FadeInOnScroll>
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white font-kanit font-semibold mb-4 text-4xl md:text-6xl lg:text-8xl pb-10 lg:pb-20">
            Contact Me
          </h1>
          <EmailForm />
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default ContactBody;
