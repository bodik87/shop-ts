"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Beers } from "./beers";
import { Beer } from "@/app/models/models";
import { fetchBeers } from "@/app/api/testing/fetch-products";
import Spinner from "../Spinner";

export function LoadMore() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreBeers = async () => {
    // await delay(500);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchBeers(nextPage)) ?? [];
    setBeers((prevProducts: Beer[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) { loadMoreBeers() }
  }, [inView]);

  return (
    <>
      <Beers beers={beers} />
      <div
        className="flex justify-center items-center p-4 col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
