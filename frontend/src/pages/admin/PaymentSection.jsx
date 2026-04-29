import { Button } from "@/components/ui/button";

const transactions = [
  { id: "TXN-901", user: "Aarav", amount: 15999, status: "Success", method: "UPI" },
  { id: "TXN-902", user: "Neha", amount: 4299, status: "Failed", method: "Card" },
  { id: "TXN-903", user: "Rahul", amount: 8999, status: "Success", method: "Net Banking" },
];

const PaymentSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Payment Management</h2>
        <p className="text-sm text-slate-500">Monitor transactions, failed payments, and refunds.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-sm font-semibold">Transaction</th>
              <th className="p-3 text-sm font-semibold">User</th>
              <th className="p-3 text-sm font-semibold">Amount</th>
              <th className="p-3 text-sm font-semibold">Method</th>
              <th className="p-3 text-sm font-semibold">Status</th>
              <th className="p-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t border-slate-100">
                <td className="p-3 font-medium">{txn.id}</td>
                <td className="p-3">{txn.user}</td>
                <td className="p-3">₹{txn.amount}</td>
                <td className="p-3">{txn.method}</td>
                <td className="p-3">{txn.status}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Button variant="outline">Retry</Button>
                    <Button variant="destructive">Refund</Button>
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

export default PaymentSection;
