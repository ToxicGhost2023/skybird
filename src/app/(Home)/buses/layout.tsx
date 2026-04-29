import PromoBanner from "@/components/layout/PromoBanner";
import ServiceNav from "@/components/layout/ServiceNav";

export default function BusesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bannerImages = ["/images/banner/bus.webp"];

  return (
    <>
      <PromoBanner images={bannerImages} />
      <div className="sticky  z-20 top-0  bg-blue-800/10 backdrop-blur-xs backdrop-grayscale">
        <ServiceNav />
      </div>
      {children}
    </>
  );
}
