"use client"
import { useState } from "react"

export default function TransactionForm({ onSuccess }: any) {
  const [amount, setAmount] = useState("")

  async function submit() {
    await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify({
        amount,
        type: "expense",
        category: "Makan",
        note: "",
        date: new Date()
      })
    })

    setAmount("")
    onSuccess()
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <input
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  )
}
