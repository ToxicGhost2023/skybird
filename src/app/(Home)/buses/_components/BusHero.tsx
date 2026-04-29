import Image from "next/image";
import Link from "next/link";

function BusHero() {
  return (
    <main className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10 px-4 container mx-auto">
      <Link
        href="#"
        className="w-full md:w-1/2 transition-transform hover:scale-105 duration-300"
      >
        <Image
          src="/images/airPlan/Hero.webp"
          width={700}
          height={200}
          alt="رزرو بلیط اتوبوس"
          priority={true}
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </Link>
      <Link
        href="#"
        className="w-full md:w-1/2 transition-transform hover:scale-105 duration-300"
      >
        <Image
          src="/images/airPlan/Hero2.webp"
          width={700}
          height={200}
          alt="خرید اینترنتی بلیط اتوبوس"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </Link>
    </main>
  );
}

export default BusHero;
