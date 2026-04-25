import Image from "next/image";

type Props = {
  images: string[];
};

export default function PromoBanner({ images }: Props) {
  return (
    <div className="w-full overflow-x-auto py-24">
      <div className=" flex gap-4">
        {images.map((src, i) => (
          <Image
            width={1000}
            height={600}
            key={i}
            src={src}
            alt={`banner-${i}`}
            className="h-40 w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
