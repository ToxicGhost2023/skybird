import Image from "next/image";

type Props = {
  images: string[];
};

export default function PromoBanner({ images }: Props) {
  return (
    <div className="w-full overflow-x-auto py-24 ">
      <div className=" flex gap-4">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`banner-${i}`}
            width={1000}
            height={600}
            quality={85}
            loading={i === 0 ? "eager" : "lazy"}
            priority={i === 0}
            className="rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
