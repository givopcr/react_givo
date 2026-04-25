import { useMemo, useState } from "react"
import PageHeader from "../components/PageHeader"
import ordersSeed from "../data/orders.json"

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}

const statusClassMap = {
  Pending: "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700",
}

export default function Orders() {
  const [orders, setOrders] = useState(ordersSeed)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  })

  const totalRevenue = useMemo(
    () => orders.reduce((sum, item) => sum + Number(item.totalPrice), 0),
    [orders]
  )

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      ...formData,
      totalPrice: Number(formData.totalPrice),
    }

    setOrders((prev) => [payload, ...prev])
    setFormData({
      orderId: "",
      customerName: "",
      status: "Pending",
      totalPrice: "",
      orderDate: "",
    })
    setIsFormOpen(false)
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="Coffee Orders"
        breadcrumb={["Coffee Admin", "Orders", "Coffee Order List"]}
      >
        <button
          type="button"
          className="rounded-lg bg-hijau px-4 py-2 text-white hover:brightness-95"
          onClick={() => setIsFormOpen(true)}
        >
          Add Orders
        </button>
      </PageHeader>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold">{orders.length}</p>
        </article>
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-gray-500">Pending</p>
          <p className="text-2xl font-bold">
            {orders.filter((item) => item.status === "Pending").length}
          </p>
        </article>
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-gray-500">Completed</p>
          <p className="text-2xl font-bold">
            {orders.filter((item) => item.status === "Completed").length}
          </p>
        </article>
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-gray-500">Coffee Revenue</p>
          <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
        </article>
      </section>

      <section className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Guest Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total Bill</th>
                <th className="px-4 py-3">Brewing Date</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((item) => (
                <tr key={item.orderId} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-semibold text-gray-700">{item.orderId}</td>
                  <td className="px-4 py-3 text-gray-700">{item.customerName}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClassMap[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{formatCurrency(item.totalPrice)}</td>
                  <td className="px-4 py-3 text-gray-700">{item.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isFormOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Add Coffee Order</h3>
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              <input name="orderId" value={formData.orderId} onChange={onChange} placeholder="Order ID" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <input name="customerName" value={formData.customerName} onChange={onChange} placeholder="Guest Name" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <select name="status" value={formData.status} onChange={onChange} className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau">
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <input name="totalPrice" type="number" min="0" value={formData.totalPrice} onChange={onChange} placeholder="Total Bill" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <input name="orderDate" type="date" value={formData.orderDate} onChange={onChange} required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau sm:col-span-2" />
              <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsFormOpen(false)} className="rounded-md border border-gray-300 px-4 py-2 text-gray-600">Cancel</button>
                <button type="submit" className="rounded-md bg-hijau px-4 py-2 text-white">Save Coffee Order</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
