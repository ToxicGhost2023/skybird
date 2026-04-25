import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <main className=" flex gap-25 justify-center items-center mt-10  ">
      <Link href="#">
        <Image
          src="/images/airPlan/Hero.webp"
          width={700}
          height={200}
          alt={"Hero"}
          priority
        />
      </Link>
      <Link href="#">
        <Image
          src="/images/airPlan/Hero2.webp"
          width={700}
          height={200}
          alt={"Hero"}
        />
      </Link>
    </main>
  );
}

export default Hero;
