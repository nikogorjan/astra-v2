import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type Language = {
  url: string;
  title: string;
  short: string;
  icon?: ImageProps;
};

type Props = {
  languages: Language[];
};

export type LanguagesButtonProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LanguagesButton = (props: LanguagesButtonProps) => {
  const { languages } = {
    ...LanguagesButtonDefaults,
    ...props,
  } as Props;

  const defaultLanguage = languages.find((lang) => lang.short === "EN");
  const [selectedLanguage, setSelectedLanguage] = useState<
    Language | undefined
  >(defaultLanguage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };

    // Set initial screen size
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Selected Language Display */}
      <div
        className="flex items-center justify-center font-bold text-[14px] border-none py-[3px] pl-[6px] pr-[8px] custom-button-font cursor-pointer mr-3 tag-button h-9"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <img
          src={selectedLanguage?.icon?.src}
          alt={selectedLanguage?.icon?.alt}
          className="w-[24px] h-[24px] margin-left-animation"
        />
        <p className="ml-1">{selectedLanguage?.short}</p>
      </div>

      {/* Dropdown Menu with Animation */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            animate="open"
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: 1,
                y: "2%",
                x: isMobile ? "-50%" : "-10%", // Adjust based on isMobile
              },
              close: {
                visibility: "hidden",
                opacity: 0,
                y: "25%",
                x: isMobile ? "-50%" : "-10%", // Adjust based on isMobile
              },
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 bg-[#1A1A1A] w-[200px] border rounded-[10px] shadow-lg z-50 p-1 menu-border"
          >
            {languages.map((language, index) => (
              <div
                key={index}
                className={`flex items-center h-[52px] p-2 gap-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out language-hover`}
                onClick={() => handleLanguageChange(language)}
              >
                <img
                  src={language.icon?.src}
                  alt={language.icon?.alt}
                  className="w-6 h-6"
                />
                <span className="text-white font-bold text-md leading-4">
                  {language.title}
                </span>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguagesButton;

export const LanguagesButtonDefaults: LanguagesButtonProps = {
  languages: [
    {
      url: "#",
      title: "Slovenian",
      short: "SI",
      icon: {
        src: "/Icons/Slovenia.svg",
        alt: "Slovenian flag",
      },
    },
    {
      url: "#",
      title: "English",
      short: "EN",
      icon: {
        src: "/Icons/GB.svg",
        alt: "British flag",
      },
    },
    {
      url: "#",
      title: "German",
      short: "GE",
      icon: {
        src: "/Icons/German.svg",
        alt: "German flag",
      },
    },
    {
      url: "#",
      title: "Croatian",
      short: "CR",
      icon: {
        src: "/Icons/Croatian.svg",
        alt: "Croatian flag",
      },
    },
  ],
};
