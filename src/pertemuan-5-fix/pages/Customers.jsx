import { useState } from "react"
import PageHeader from "../components/PageHeader"
import customersSeed from "../data/customers.json"

const loyaltyClassMap = {
  Bronze: "bg-orange-100 text-orange-700",
  Silver: "bg-slate-200 text-slate-700",
  Gold: "bg-yellow-100 text-yellow-700",
}

export default function Customers() {
  const [customers, setCustomers] = useState(customersSeed)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  })

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCustomers((prev) => [formData, ...prev])
    setFormData({
      customerId: "",
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    })
    setIsFormOpen(false)
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="Coffee Customers"
        breadcrumb="Coffee Admin / Customers / Member List"
      >
        <button
          type="button"
          className="rounded-lg bg-hijau px-4 py-2 text-white hover:brightness-95"
          onClick={() => setIsFormOpen(true)}
        >
          Add Customer
        </button>
      </PageHeader>

      <section className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-4 py-3">Customer ID</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Membership</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {customers.map((item) => (
                <tr key={item.customerId} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-semibold text-gray-700">{item.customerId}</td>
                  <td className="px-4 py-3 text-gray-700">{item.customerName}</td>
                  <td className="px-4 py-3 text-gray-700">{item.email}</td>
                  <td className="px-4 py-3 text-gray-700">{item.phone}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${loyaltyClassMap[item.loyalty]}`}>
                      {item.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isFormOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Add Coffee Customer</h3>
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              <input name="customerId" value={formData.customerId} onChange={onChange} placeholder="Customer ID" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <input name="customerName" value={formData.customerName} onChange={onChange} placeholder="Customer Name" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <input name="email" type="email" value={formData.email} onChange={onChange} placeholder="Email" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <input name="phone" value={formData.phone} onChange={onChange} placeholder="Phone" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau" />
              <select name="loyalty" value={formData.loyalty} onChange={onChange} className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-hijau sm:col-span-2">
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
              <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsFormOpen(false)} className="rounded-md border border-gray-300 px-4 py-2 text-gray-600">Cancel</button>
                <button type="submit" className="rounded-md bg-hijau px-4 py-2 text-white">Save Customer</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
