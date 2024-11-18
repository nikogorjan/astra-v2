import { Button } from "@relume_io/relume-ui";

type BlueButtonRightProps = {
  text: string;
};

export const BlueButtonRight = ({ text }: BlueButtonRightProps) => {
  return (
    <Button className="mt-6 md:mt-12 py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full md:w-auto justify-center border-none cursor-pointer">
      <div className="flex items-center justify-center">
        <p>{text}</p>
        <div className="w-3 h-3 ml-2">
          <img
            src="/Icons/arrow-rigth.svg"
            alt="Arrow Right Icon"
            className="w-full h-full"
          />
        </div>
      </div>
    </Button>
  );
};
