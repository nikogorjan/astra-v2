"use client";

import { Input, Button } from "@relume_io/relume-ui";
import type { InputProps } from "@relume_io/relume-ui";
import { useState } from "react";

type ResultProps = {
  title: string;
  description: string; // Corrected typo
  numberOfViews: string; // Optional improvement for camelCase consistency
};

type Props = {
  inputPlaceholder?: string;
  inputIcon: InputProps;
  results: ResultProps[]; // Correctly defining it as an array of ResultProps
};

export type ListProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const List = (props: ListProps) => {
  const { inputPlaceholder, inputIcon, results } = {
    ...ListDefaults,
    ...props,
  } as Props;

  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <section id="relume" className="px-[5%] py-[19px] md:py-12">
      <div className="container">
        <div className="desktop hidden md:block">
          <div className="flex flex-col md:flex-row md:justify-between md:mb-8 w-full mb-8">
            <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full md:w-auto justify-center border-none cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 mr-2">
                  <img
                    src="/Icons/Math.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
                <p>Math</p>
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/chevron-down.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Button>
            <div className="w-[379px]">
              <Input
                id="search"
                type="search"
                placeholder={inputPlaceholder}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                {...inputIcon}
                className="inline-block  border-[rgba(255,255,255,0.05)] bg-[#252525] text-sm font-semibold text-[rgba(255,255,255,0.5)]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:mb-8 w-full mb-8">
            <div className="flex items-center justify-center">
              <p className="mr-[6px] font-bold leading-[18px]">Results</p>
              <div className="font-bold leading-[18px] px-2 py-[6px] items-center justify-center border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] inline-flex">
                215
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="mr-[6px] font-bold leading-[18px]">Sort By:</p>
              <div className="font-bold leading-[18px] px-2 py-[6px] items-center justify-center border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] inline-flex">
                Relavance
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/chevron-down.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile block md:hidden mb-4">
          <div className="w-full mb-[28px]">
            <Input
              id="search"
              type="search"
              placeholder={inputPlaceholder}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              {...inputIcon}
              className="inline-block  border-[rgba(255,255,255,0.05)] bg-[#252525] text-sm font-semibold text-[rgba(255,255,255,0.5)]"
            />
          </div>
          <div className="flex md:flex-row justify-between w-full mb-[48px]">
            <Button className="w-[115px] py-4 px-6 bg-[#3C50E0] custom-button-font font-bold justify-center border-none cursor-pointer inline-flex">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 mr-2">
                  <img
                    src="/Icons/Math.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
                <p>Math</p>
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/chevron-down.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Button>
            <div className="flex items-center justify-center">
              <p className="mr-[6px] font-bold leading-[18px]">Sort By:</p>
              <div className="font-bold leading-[18px] px-2 py-[6px] items-center justify-center border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] inline-flex">
                Relavance
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/chevron-down.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <p className="mr-[6px] font-bold leading-[18px]">Results</p>
            <div className="font-bold leading-[18px] px-2 py-[6px] items-center justify-center border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] inline-flex">
              215
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-8 md:gap-x-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-[#191919] p-5 min-h-[250px] border border-[rgba(255,255,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <img
                    src="/images/Notebook.png"
                    alt="notebook"
                    className="size-9"
                  />
                  <img
                    src="/images/avatars.png"
                    alt="notebook"
                    className="w-[76px] h-5"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white mb-1 leading-6">
                  {result.title}
                </h3>
                <p className="text-[13px] font-medium text-[#8A9BAD] leading-[120%]">
                  {result.description}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium leading-[130%]">
                👀{" "}
                <span className="ml-1 text-[#8A9BAD]">
                  {result.numberOfViews}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-4 md:mt-12 flex items-center justify-center">
          <img
            src="/images/Pagination.png"
            alt="notebook"
            className="w-full sm:w-[263px]"
          />
        </div>
      </div>
    </section>
  );
};

export const ListDefaults: Props = {
  inputPlaceholder: "What school do you attend?",
  inputIcon: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M10.25 3.5C6.25778 3.5 3 6.75778 3 10.75C3 14.7422 6.25778 18 10.25 18C11.8866 18 13.3945 17.4465 14.6104 16.5254L19.293 21.207C19.3851 21.303 19.4955 21.3796 19.6176 21.4324C19.7397 21.4852 19.8712 21.5131 20.0042 21.5144C20.1373 21.5158 20.2692 21.4906 20.3924 21.4403C20.5156 21.39 20.6275 21.3157 20.7216 21.2216C20.8157 21.1275 20.89 21.0156 20.9403 20.8924C20.9906 20.7692 21.0158 20.6373 21.0144 20.5042C21.0131 20.3712 20.9852 20.2397 20.9324 20.1176C20.8796 19.9955 20.803 19.8851 20.707 19.793L16.0254 15.1104C16.9465 13.8945 17.5 12.3866 17.5 10.75C17.5 6.75778 14.2422 3.5 10.25 3.5ZM10.25 5.5C13.1613 5.5 15.5 7.83866 15.5 10.75C15.5 12.1479 14.957 13.4103 14.0742 14.3486C13.9883 14.4108 13.9128 14.4863 13.8506 14.5723C12.9121 15.4562 11.6489 16 10.25 16C7.33866 16 5 13.6613 5 10.75C5 7.83866 7.33866 5.5 10.25 5.5Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
    ),
    iconPosition: "left",
  },
  results: [
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
    {
      title: "Banking and Financial Management",
      description: "School of Economics and Business...", // Updated field name
      numberOfViews: "186", // Updated field name
    },
  ],
};

List.displayName = "List";
