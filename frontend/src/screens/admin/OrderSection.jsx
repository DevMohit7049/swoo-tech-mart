import { useState } from "react";


const mockOrders = [
  { id: "ORD-1001", customer: "Aarav Sharma", total: 15999, status: "Pending", payment: "Paid" },
  { id: "ORD-1002", customer: "Neha Jain", total: 4299, status: "Processing", payment: "Paid" },
  { id: "ORD-1003", customer: "Rahul Verma", total: 8999, status: "Shipped", payment: "Paid" },
  { id: "ORD-1004", customer: "Priya Sethi", total: 2999, status: "Cancelled", payment: "Refund Requested" },
];

const statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const OrderSection = () => {
  const [orders, setOrders] = useState(mockOrders);

  const updateStatus = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Order Management</h2>
          <p className="text-sm text-slate-500">Track orders, update delivery stage, and manage refunds.</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-sm font-semibold">Order ID</th>
              <th className="p-3 text-sm font-semibold">Customer</th>
              <th className="p-3 text-sm font-semibold">Total</th>
              <th className="p-3 text-sm font-semibold">Status</th>
              <th className="p-3 text-sm font-semibold">Payment</th>
              <th className="p-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="p-3 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">₹{order.total}</td>
                <td className="p-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="h-9 px-2 border border-slate-300 rounded-md bg-white text-sm"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3 text-sm">{order.payment}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    <button variant="outline">Refund</button>
                    <button variant="outline">Invoice</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSection;
