// app/trains/page.jsx
import { cookies } from "next/headers";
import TrainHero from "./_components/TrainHero";
import PopularRoutes from "./_components/PopularRoutes";
import TrainJourneyGuide from "./_components/TrainJourneyGuide";
import RailwayCompanies from "./_components/RailwayCompanies";
import RailAdvantages from "./_components/RailAdvantages";
import SearchFlight from "../flights/_components/SearchFlight";

export default async function TrainsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token_sky");

  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50 to-white">
      <div className="bg-linear-to-r from-green-600 to-green-100">
        <SearchFlight isLoggedIn={!!token} />
      </div>
      <TrainHero />
      <PopularRoutes />
      <TrainJourneyGuide />
      <RailwayCompanies />
      <RailAdvantages />
    </main>
  );
}
