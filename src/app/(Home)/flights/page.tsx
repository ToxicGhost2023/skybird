import Hero from "./_components/Hero";
import ListCompany from "./_components/ListCompany";
import Options from "./_components/Options";
import Popular from "./_components/Popular";
import PropertySite from "./_components/PropertySite";
import SearchFlight from "./_components/SearchFlight";

export default function FlightsHomePage() {
  return (
    <h1>
      <SearchFlight />

      <Hero />
      <Popular />
      <Options />
      <ListCompany />
      <PropertySite />
    </h1>
  );
}
