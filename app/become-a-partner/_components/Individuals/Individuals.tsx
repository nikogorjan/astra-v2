import { Button } from "@relume_io/relume-ui";

type Props = {
  individuals: string[];
};

export type IndividualsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Individuals = (props: IndividualsProps) => {
  const { individuals } = {
    ...IndividualsDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <h2 className="text-[28px] md:text-[42px] font-bold leading-7 md:leading-[60px] text-center mb-14">
          Wall of Individual <span className="text-[#FDB300]">podpornikov</span>
        </h2>{" "}
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-3 mb-14">
          {individuals.map((individual, index) => (
            <div
              key={index}
              className="w-[172px] md:w-[200px] flex items-center justify-center"
            >
              <span className="text-center text-sm font-semibold whitespace-nowrap capitalize leading-6">
                {individual}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button className="h-[47px] py-4 px-6 bg-transparent custom-button-font font-bold w-full md:w-auto justify-center cursor-pointer border border-white text-sm">
            <div className="flex items-center justify-center">
              <p>Wall of Past Supporters</p>
              <div className="w-3 h-3 ml-2">
                <img
                  src="/Icons/arrow-rigth.svg"
                  alt="Arrow Right Icon"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const IndividualsDefaults: Props = {
  individuals: [
    "Aleš Krmavnar",
    "Repnik Tina",
    "Monika Zavbi",
    "Aljaž Mihevec",
    "Sabina Ajkič",
    "Aleks Bezjak",
    "Nusa Willenpart",
    "Kristjan Toplak",
    "Žiga Žandar",
    "Žiga Vavpotič",
    "Anonimni podpornik",
    "Jaka Konjar",
    "Marko Šopar",
    "Iztok Lončar",
    "Rok Lavrič",
    "Maja Kunc",
    "Ines Gomboc",
    "Anonimni podpornik",
    "Katja Cimermančič",
    "Špela Zajc",
    "Medimove d.o.o.",
    "David Milosavljević",
  ],
};

Individuals.displayName = "Individuals";
