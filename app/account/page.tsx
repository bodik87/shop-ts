"use client"
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Account = () => {
  const session = useSession()

  return (
    <section>
      <div className="flex justify-end">
        {session?.status === "authenticated"
          ? <button onClick={() => signOut()}>Вихід</button>
          : <Link href={`/authpage`}>Вхід</Link>}
      </div>
    </section>
  )
}

export default Account