import BusHero from "./_components/BusHero";
import PopularRoutesBus from "./_components/PopularRoutesBus";
import BusJourneyGuide from "./_components/BusJourneyGuide";
import BusCompanies from "./_components/BusCompanies";
import BusAdvantages from "./_components/BusAdvantages";
import SearchFlight from "../flights/_components/SearchFlight";
import { cookies } from "next/headers";

export default async function BusPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token_sky");
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-linear-to-r from-red-600 to-red-100">
        <SearchFlight isLoggedIn={!!token} />
      </div>
      <BusHero />
      <PopularRoutesBus />
      <BusJourneyGuide />
      <BusCompanies />
      <BusAdvantages />
    </main>
  );
}
