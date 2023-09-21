"use client";
import { ReactNode, useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Hydration({ children }: { children: ReactNode }) {
  const [isHydrdated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrdated ? (
        <>
          {children}
        </>
      ) : (
        <>
          <div className="fixed inset-0 bg-white backdrop-blur-xl z-50 flex items-center justify-center" >
            <Spinner />
          </div>
          {children}
        </>
      )}
    </>
  );
}
