import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
