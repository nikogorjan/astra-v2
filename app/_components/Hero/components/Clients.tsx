"use client";

type ClientsProps = {
  numberOfStudents: string;
};

export const Clients = (props: Partial<ClientsProps>) => {
  const { numberOfStudents } = {
    ...ClientsDefaults,
    ...props,
  } as ClientsProps;

  return (
    <div className="flex items-center justify-center custom-row md:mt-8 mb-6 sm:mb-8">
      <div className="flex items-center justify-center custom-margin">
        <img
          src="/images/client1.svg"
          alt="client 1"
          className="w-[21.62px] h-[28px]"
        />
        <img
          src="/images/client2.svg"
          alt="client 2"
          className="w-[21.62px] h-[28px]"
        />
        <img
          src="/images/client3.svg"
          alt="client 3"
          className="w-[21.62px] h-[28px]"
        />
        <img
          src="/images/client4.svg"
          alt="client 4"
          className="w-[28px] h-[28px]"
        />
      </div>
      <p className="text-[13px] font-regular ml-3">
        Trusted by <span className="font-bold">{numberOfStudents}+</span>{" "}
        Students
      </p>
    </div>
  );
};

export const ClientsDefaults: ClientsProps = {
  numberOfStudents: "40,000",
};

Clients.displayName = "Clients";
