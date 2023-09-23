import { Beer } from "@/app/models/models";
import Image from "next/image";

export interface BeerProps {
  beers: Beer[] | null;
}

export function Beers({ beers }: BeerProps) {
  return (
    <>
      {beers ? (
        beers.map((beer) => (
          <Image
            key={beer.name}
            src={beer.image_url}
            alt={beer.name}
            className="object-contain h-48 rounded"
            width={500}
            height={600}
          />
        ))
      ) : (
        <div className="text-xl font-bold">No beers available !! </div>
      )}
    </>
  );
}
