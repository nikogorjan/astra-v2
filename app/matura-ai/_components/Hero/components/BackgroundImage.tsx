import "./BackgroundImage.css";
type BackgroundImageProps = {
  src: string;
  alt?: string;
};

export const BackgroundImage = ({ src, alt }: BackgroundImageProps) => (
  <div className="absolute inset-0 -z-10">
    <img
      src={src}
      className="size-full object-cover low-opacity-mobile"
      alt={alt}
    />
    <div className="absolute inset-0 " />
  </div>
);
