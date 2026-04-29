"use client";

import { Loader } from "@/components/ui/Loader";
import Image from "next/image";
import Link from "next/link";
import { useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/flights");
  }, [router]);

  const handleNavigation = (e: { preventDefault: () => void; }): any => {
    e.preventDefault();
    startTransition(() => {
      router.push("/flights"); 
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/Home.jpg"
        alt="Sky Background"
        fill
        priority
        className="object-cover object-center brightness-[0.45] saturate-150 scale-105 animate-slow-zoom 
  mask-linear-180 mask-linear-from-85"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/70"></div>
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-cyan-300/10 mix-blend-overlay"></div>

      <div className="relative z-10 text-white px-8 max-w-2xl text-center backdrop-blur-sm p-8 rounded-2xl bg-white/10 shadow-2xl border border-white/20 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-xl">
          خوش اومدی به دنیای <span className="text-cyan-300">SkyBird</span> ✈️
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          اینجا جاییه که می‌تونی بهترین پروازهای دنیا رو تجربه کنی. طراحی شده با
          عشق، قدرت و سرعت برای کاربران حرفه‌ای.
        </p>

        <Link
          href="/flights"
          prefetch
          onClick={handleNavigation}
          className="inline-block bg-linear-to-r from-blue-600 to-cyan-400 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
        >
          {isPending ? <Loader duration={1500} /> : "ورود به سایت"}
        </Link>
      </div>
    </div>
  );
}
