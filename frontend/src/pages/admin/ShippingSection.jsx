import { Button } from "@/components/ui/button";

const shipments = [
  { orderId: "ORD-1001", courier: "Delhivery", tracking: "DL12345IN", status: "In Transit" },
  { orderId: "ORD-1002", courier: "BlueDart", tracking: "BD88822IN", status: "Out For Delivery" },
  { orderId: "ORD-1003", courier: "XpressBees", tracking: "XB99173IN", status: "Delivered" },
];

const ShippingSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Shipping Management</h2>
        <p className="text-sm text-slate-500">Assign courier status, track shipments, and manage delivery updates.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-sm font-semibold">Order</th>
              <th className="p-3 text-sm font-semibold">Courier</th>
              <th className="p-3 text-sm font-semibold">Tracking</th>
              <th className="p-3 text-sm font-semibold">Status</th>
              <th className="p-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.tracking} className="border-t border-slate-100">
                <td className="p-3 font-medium">{shipment.orderId}</td>
                <td className="p-3">{shipment.courier}</td>
                <td className="p-3">{shipment.tracking}</td>
                <td className="p-3">{shipment.status}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Button variant="outline">Update</Button>
                    <Button variant="outline">Track</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
        Courier API integration placeholder UI (Delhivery / Shiprocket / BlueDart).
      </div>
    </div>
  );
};

export default ShippingSection;
