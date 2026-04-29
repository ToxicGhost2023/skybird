import { cookies } from "next/headers";
import Hero from "./_components/Hero";
import ListCompany from "./_components/ListCompany";
import Options from "./_components/Options";
import Popular from "./_components/Popular";
import PropertySite from "./_components/PropertySite";
import SearchFlight from "./_components/SearchFlight";

export default async function FlightsHomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token_sky");
  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50 to-white">
      <div className="bg-linear-to-r from-blue-600 to-blue-100">
        <SearchFlight isLoggedIn={!!token} />
      </div>
      <Hero />
      <Popular />
      <Options />
      <ListCompany />
      <PropertySite />
    </main>
  );
}
