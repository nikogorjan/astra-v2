// components/ButtonGroup.tsx
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import LanguagesButton from "./LanguagesButton";

const ButtonGroup = ({ buttons }: { buttons: ButtonProps[] }) => (
  <div className="hidden custom-lg:flex items-center justify-center">
    <LanguagesButton />
    <div className="flex items-center justify-center font-bold text-[14px] border-none py-4 px-4 custom-button-font cursor-pointer mr-2">
      <img
        src="/Icons/Person.svg"
        alt="Person Icon"
        className="w-full h-full margin-left-animation"
      />
      <p className="ml-1">Login</p>
    </div>
    {buttons.map((button, index) => (
      <Button
        key={index}
        {...button}
        className="font-bold text-sm/[14px] bg-[#3C50E0] border-none py-4 px-6 custom-button-font"
      >
        {button.title}
      </Button>
    ))}
  </div>
);

export default ButtonGroup;
