import Image from "next/image";
import { useState } from "react";

const Home: React.FC = () => {
  const [getStartedHovered, setGetStartedHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [seeMoreHovered, setSeeMoreHovered] = useState(false);

  return (
    <div className="relative bg-white">
      {/* Menu */}
      <button
        className={`absolute top-0 right-0 mt-4 mr-4 lg:mt-6 lg:mr-6 transition-colors ${
          menuHovered ? "hover:text-black" : ""
        }`}
        onMouseEnter={() => setMenuHovered(true)}
        onMouseLeave={() => setMenuHovered(false)}
      >
        <img src="/menu.svg" alt="menu" className="h-8 w-8 lg:h-10 lg:w-10" />
      </button>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* Text and Button */}
        <div className="text-center lg:text-left lg:mr-auto lg:ml-8">
          <p className="font-inter text-sm font-normal text-black mb-6">
            A B O U T — P E R S O N A L
          </p>
          <h1 className="text-5xl text-black mb-4">
            ¡Hello! <span className="font-bold">I'm Angela Smith</span>
          </h1>
          <p className="text-lg text-black mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center lg:justify-start">
            <button
              className={`bg-black text-white font-bold py-2 px-4 rounded relative transition-colors ${
                getStartedHovered
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-gray-800"
              }`}
              onMouseEnter={() => setGetStartedHovered(true)}
              onMouseLeave={() => setGetStartedHovered(false)}
            >
              Get Started
            </button>
            <svg
              className="h-4 w-4 lg:h-6 lg:w-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6L6 10M6 10L10 14M6 10L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Image */}
        <div className="lg:ml-auto lg:mr-8 mt-6 lg:mt-0">
          <Image
            src="/angela-smith.png"
            alt="Angela Smith"
            width={700}
            height={820}
            className="object-cover"
          />
        </div>
      </div>

      {/* See More */}
      <button
        className={`absolute bottom-0 left-0 right-0 text-center mt-4 lg:mt-6 transition-colors ${
          seeMoreHovered ? "hover:text-black" : ""
        }`}
        onMouseEnter={() => setSeeMoreHovered(true)}
        onMouseLeave={() => setSeeMoreHovered(false)}
      >
        <img
          src="/see-more.svg"
          alt="see-more"
          className="h-8 w-8 lg:h-10 lg:w-10 inline-block"
        />
      </button>
    </div>
  );
};

export default Home;
