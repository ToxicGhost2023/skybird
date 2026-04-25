import PromoBanner from "@/components/layout/PromoBanner";
import ServiceNav from "@/components/layout/ServiceNav";

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bannerImages = ["/images/banner/hotel.webp"];

  return (
    <>
      <PromoBanner images={bannerImages} />
        <ServiceNav />
      {children}
    </>
  );
}
