import { fetchBeers } from "../api/testing/fetch-products";
import { Beers } from "../components/testing-page/beers";
import { LoadMore } from "../components/testing-page/load-more";

export default async function Home() {
  const beers = await fetchBeers(1);
  return (
    <div className="grid rid-cols-2 md:grid-cols-3 gap-4">
      <Beers beers={beers} />
      <LoadMore />
    </div>
  )
}
