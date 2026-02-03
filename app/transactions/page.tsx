export default function TransactionsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Add Transaction</h2>
        <input placeholder="Amount" className="border p-2 w-full mb-2"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p>• Makan -25.000</p>
        <p>• Gaji +3.500.000</p>
      </div>
    </>
  )
}
