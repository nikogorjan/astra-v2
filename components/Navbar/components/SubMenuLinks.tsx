"use client";
import { RxChevronLeft } from "react-icons/rx";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  icon?: ImageProps;
  tag?: string;
  bgColor?: string;
  flip?: string;
  subMenuLinks?: NavLink[];
};

type SubMenuLinksProps = {
  link?: NavLink | null; // Allow link to be NavLink, undefined, or null
  onClose?: () => void;
};

const SubMenuLinks = ({ link, onClose }: SubMenuLinksProps) => {
  return (
    <div className="flex flex-col px-[5%] gap-8 justify-start">
      {/* Display the main title with back button */}
      {link && (
        <div
          className="flex items-center gap-[6px] cursor-pointer"
          onClick={onClose}
        >
          <RxChevronLeft className="size-6 cursor-pointer" />
          <h2 className="block text-md font-bold text-text-alternative uppercase hover:text-white transition-colors duration-300">
            {link.title}
          </h2>
        </div>
      )}

      {/* Display submenu links */}
      {link?.subMenuLinks?.map((subLink, index) => (
        <div className="flex gap-2">
          <a
            key={index}
            href={subLink.url}
            className="block text-md font-bold text-text-alternative uppercase hover:text-white transition-colors duration-300"
          >
            {subLink.title}
          </a>

          {subLink.tag && (
            <div className="submenu-item-tag">
              <p className="text-white uppercase text-xs font-bold leading-[14px] custom-text-color">
                {subLink.tag}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubMenuLinks;
