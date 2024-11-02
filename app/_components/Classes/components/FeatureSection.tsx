type ImageProps = {
  src: string;
  alt?: string;
};

export type FeatureSectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  bgColor?: string;
  headerColor?: string;
  textColor?: string;
};

const FeatureSection = ({
  icon,
  heading,
  description,
  bgColor,
  headerColor,
  textColor,
}: FeatureSectionProps) => {
  return (
    <div className="relative flex flex-col justify-center p-8 cursor-pointer">
      {/* Background Color Layer */}
      <div
        className="absolute inset-0 -z-20"
        style={{ backgroundColor: bgColor }}
      />

      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 flex items-end justify-end">
        <img
          src={icon.src}
          className="h-full object-cover opacity-5"
          alt={icon.alt}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="mb-4">
          <img src={icon.src} className="size-12" alt={icon.alt} />
        </div>
        <h3
          className="mb-2 text-2xl font-bold leading-[28px] md:text-3xl"
          style={{
            color: headerColor,
          }}
        >
          {heading}
        </h3>
        <p
          className="leading-5 font-semibold"
          style={{
            color: textColor,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
