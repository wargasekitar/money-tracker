import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white min-h-screen p-4">
      <ul className="space-y-2">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/transactions">Transactions</Link></li>
      </ul>
    </aside>
  )
}
