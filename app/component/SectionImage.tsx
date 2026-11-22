/* eslint-disable @next/next/no-img-element */

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
};

const SectionImage = ({
  src,
  alt,
  className = "object-cover",
  wrapperClassName = "relative w-full overflow-hidden",
  priority = false,
}: SectionImageProps) => {
  return (
    <div className={wrapperClassName}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${className} rounded-2xl`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default SectionImage;
