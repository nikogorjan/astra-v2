"use client";

import { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";

type Props = {
  description: string;
  inputPlaceholder?: string;
};

export type CompanyProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Company = (props: CompanyProps) => {
  const { description, inputPlaceholder } = {
    ...CompanyDefaults,
    ...props,
  } as Props;

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <div>
      <div className="text-center">
        <p className="text-sm text-[#d9d9d9] font-semibold leading-[18px] mb-6">
          {description}
        </p>
        <div className="mx-auto w-full max-w-sm">
          <form
            className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3"
            onSubmit={handleSubmit}
          >
            <Input
              id="email"
              type="email"
              placeholder={inputPlaceholder}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-[#242424] px-5 py-[18px] text-[14px] font-semibold h-[47px] border border-[rgba(255,255,255,0.10)]"
            />
            <Button className="h-[47px] py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full md:w-auto justify-center border-none cursor-pointer">
              <div className="flex items-center justify-center">
                <p>Pošlji</p>
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/arrow-rigth.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const CompanyDefaults: CompanyProps = {
  description:
    "Do you want to support students with a larger financial contribution and be recognized as a project partner? Enter your email address below, and I will contact you as soon as possible.",
  inputPlaceholder: "Enter your email",
};

Company.displayName = "Company";
