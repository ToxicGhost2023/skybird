import PromoBanner from "@/components/layout/PromoBanner";
import ServiceNav from "@/components/layout/ServiceNav";

export default function BusesLayout({ children }: { children: React.ReactNode }) {
  const bannerImages = ["/images/banner/bus.webp"];

  return (
    <>
      <PromoBanner images={bannerImages} />
        <ServiceNav />
      {children}
    </>
  );
}
