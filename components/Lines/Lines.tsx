export const Lines = () => {
  return (
    <div className="background fixed inset-0 -z-10">
      <div className="container h-full">
        <div className="w-full h-full flex justify-between">
          <div className="lines hidden sm:flex"></div>
          <div className="lines hidden sm:flex"></div>
        </div>
      </div>
    </div>
  );
};

Lines.displayName = "Lines";
