import StatCard from "@/components/StatCard"

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Saldo" value="Rp 2.500.000" />
        <StatCard title="Income" value="Rp 5.000.000" />
        <StatCard title="Expense" value="Rp 2.500.000" />
      </div>
    </>
  )
}
