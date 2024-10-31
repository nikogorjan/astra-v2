// components/Logo.tsx
type LogoProps = {
  src: string;
  url?: string;
  alt?: string;
};

const Logo = ({ src, url, alt }: LogoProps) => (
  <div className="flex items-center justify-center">
    <a href={url}>
      <img src={src} alt={alt} />
    </a>
    <img
      src="/images/Line.svg"
      alt="Separator"
      className="separator-img ml-4 hidden custom-lg:block"
    />
  </div>
);

export default Logo;
