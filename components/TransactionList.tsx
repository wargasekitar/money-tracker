"use client"
import { useEffect, useState } from "react"

export default function TransactionList() {
  const [data, setData] = useState<any[]>([])

  async function load() {
    const res = await fetch("/api/transactions")
    setData(await res.json())
  }

  async function remove(id: string) {
    await fetch(`/api/transactions/${id}`, { method: "DELETE" })
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <div className="bg-white p-4 rounded shadow">
      {data.map(d => (
        <div key={d.id} className="flex justify-between mb-2">
          <span>{d.category} - {d.amount}</span>
          <button
            className="text-red-500"
            onClick={() => remove(d.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}