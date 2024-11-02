import { Button } from "@relume_io/relume-ui";

const BuyButtonWithIcon = () => (
  <div className="custom-gradient-border w-full">
    <Button className="custom-button-font inner-button font-bold w-full">
      <div className="flex items-center gap-[6px] w-full justify-center">
        <div className="margin-right-animation">Buy Astra AI Plus</div>
        <div className="w-4 h-4">
          <img
            src="/Icons/arrow-rigth.svg"
            alt="Arrow Right Icon"
            className="w-full h-full margin-left-animation"
          />
        </div>
      </div>
    </Button>
  </div>
);

export default BuyButtonWithIcon;
