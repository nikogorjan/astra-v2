"use client";

import { Input } from "@relume_io/relume-ui";
import type { InputProps } from "@relume_io/relume-ui";
import { useState } from "react";

type SchoolProps = {
  title: string;
  numberOfNotes: string;
  url: string;
};

type Props = {
  heading: string;
  schools: SchoolProps[];
  inputPlaceholder?: string;
  inputIcon: InputProps;
};

export type SchoolsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Schools = (props: SchoolsProps) => {
  const { schools, inputPlaceholder, inputIcon } = {
    ...SchoolsDefaults,
    ...props,
  } as Props;

  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <section id="relume" className="px-[5%] py-[19px] md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between mb-6 md:mb-8 w-full">
          <p className="text-center md:text-start text-[22px] font-bold leading-6 mb-6 md:mb-0">
            Select your School
          </p>
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
        <div className="grid grid-cols-1 gap-x-[38px] gap-y-3 md:grid-cols-3">
          {schools.map((topic, index) => (
            <a
              href={topic.url}
              key={index}
              className="px-6 py-5 hover:bg-[#3C50E0] transition-colors duration-300 ease-in-out cursor-pointer block"
            >
              <div className="w-full flex justify-between items-center mb-3 ">
                <h2 className="text-md leading-4 font-bold">{topic.title}</h2>
                <img
                  src="/Icons/arrow-rigth.svg"
                  alt="Arrow Right Icon"
                  className="w-4 h-4"
                />
              </div>
              <p className="text-sm leading-[14px]">{topic.numberOfNotes}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SchoolsDefaults: SchoolsProps = {
  heading: "List of video explenation schools",
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
  schools: [
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
    {
      title: "Gimnazija Bežigrad",
      numberOfNotes: "215 Notes",
      url: "/resources/gimnazija-bezigrad",
    },
  ],
};

Schools.displayName = "Schools";
