// components/NavLinks.tsx

import SubMenu from "./SubMenu";

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type NavLinksProps = {
  links: NavLink[];
  isMobile: boolean;
};

const NavLinks = ({ links, isMobile }: NavLinksProps) => (
  <div className="custom-lg:flex gap-5 custom-lg:ml-4">
    {links.map((navLink, index) => (
      <div key={index} className="first:pt-4 custom-lg:first:pt-0">
        {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
          <SubMenu navLink={navLink} isMobile={isMobile} />
        ) : (
          <a
            href={navLink.url}
            className="block py-3 custom-lg:text-sm text-md custom-lg:py-2 custom-button-font font-bold custom-lg:text-[#afafaf] text-text-alternative uppercase custom-lg:normal-case hover:text-white transition-colors duration-300"
          >
            {navLink.title}
          </a>
        )}
      </div>
    ))}
  </div>
);

export default NavLinks;
