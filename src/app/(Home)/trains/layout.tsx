import PromoBanner from "@/components/layout/PromoBanner";
import ServiceNav from "@/components/layout/ServiceNav";

export default function TrainsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bannerImages = ["/images/banner/train.webp"];

  return (
    <>
      <PromoBanner images={bannerImages} />
      <ServiceNav />
      {children}
    </>
  );
}
