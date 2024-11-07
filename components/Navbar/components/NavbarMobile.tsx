// components/NavbarMobile.tsx

import { Button } from "@relume_io/relume-ui";
import HamburgerIcon from "./HamburgerIcon";
import LanguagesButton, { LanguagesButtonDefaults } from "./LanguagesButton"; // Import LanguagesButton

type NavbarMobileProps = {
  logo: {
    url?: string;
    src: string;
    alt?: string;
  };
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const NavbarMobile = ({
  logo,
  isMobileMenuOpen,
  toggleMobileMenu,
}: NavbarMobileProps) => (
  <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 custom-lg:min-h-full custom-lg:px-0">
    <div className="flex items-center justify-center">
      <a href={logo.url}>
        <img src={logo.src} alt={logo.alt} />
      </a>
      <img
        src="/images/Line.svg"
        alt="Separator"
        className="separator-img ml-4 hidden custom-lg:block"
      />
    </div>

    <div className="flex items-center justify-center">
      {/* Conditionally render Button or LanguagesButton */}
      {isMobileMenuOpen ? (
        <LanguagesButton languages={LanguagesButtonDefaults.languages} />
      ) : (
        <Button className="custom-lg:hidden font-bold text-sm/[14px] bg-[#3C50E0] border-none py-4 px-6 custom-button-font">
          Try for free
        </Button>
      )}

      <HamburgerIcon
        isMobileMenuOpen={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      />
    </div>
  </div>
);

export default NavbarMobile;
