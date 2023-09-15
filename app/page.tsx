import Link from "next/link";

const data = [{ id: 1, title: "Category 1" }]

export default function Home() {
  return (
    <main>
      {data.map(el => <Link key={el.id} href={`/${el.id}`}>Go</Link>)}
    </main>
  )
}
