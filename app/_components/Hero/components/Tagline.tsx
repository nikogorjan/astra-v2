import Astraai from "./Astraai";

export const Tagline = () => (
  <div className="tagline mb-6">
    <p className="custom-font-size custom-button-font font-bold text-[13px] leading-[18px] whitespace-nowrap">
      Powered by the most precise AI for math
    </p>
    <img src="/images/Line.svg" alt="Separator" className="separator-img" />
    <div className="astra-vectors">
      <Astraai />
    </div>
  </div>
);
