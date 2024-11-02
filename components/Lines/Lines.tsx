export const Lines = () => {
  return (
    <div className="background fixed inset-0 -z-10">
      <div className="relative container h-full">
        <div className="w-full h-full flex justify-between"></div>
        <div className="absolute inset-0 z-10">
          {" "}
          {/* Increase z-index */}
          <img
            src="/images/Lines.svg"
            className="size-full object-cover hidden custom-lg:flex"
            alt="Lines"
          />
          <div className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
};
