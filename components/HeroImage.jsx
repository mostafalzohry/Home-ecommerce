import Image from "next/image";

function HeroImage(src, width, height) {
  return (
    src && (
      <Image
        src={src}
        className="w-full"
        width={width}
        height={height}
        alt="slider"
      />
    )
  );
}

export default HeroImage;
