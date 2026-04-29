import { Button } from "@/components/ui/button";

const coupons = [
  { code: "WELCOME10", type: "Percentage", value: "10%", expiry: "2026-06-30", active: true },
  { code: "FLAT500", type: "Flat", value: "₹500", expiry: "2026-05-15", active: true },
  { code: "OLDUSER", type: "Percentage", value: "5%", expiry: "2025-12-31", active: false },
];

const CouponSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Coupons / Offers</h2>
        <p className="text-sm text-slate-500">Create discount codes, set expiry and manage active promotions.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        <input className="h-10 px-3 border border-slate-300 rounded-md" placeholder="Coupon code" />
        <select className="h-10 px-3 border border-slate-300 rounded-md bg-white">
          <option>Percentage</option>
          <option>Flat</option>
        </select>
        <input className="h-10 px-3 border border-slate-300 rounded-md" placeholder="Value" />
        <input className="h-10 px-3 border border-slate-300 rounded-md" type="date" />
      </div>
      <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">Create Coupon</Button>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-sm font-semibold">Code</th>
              <th className="p-3 text-sm font-semibold">Type</th>
              <th className="p-3 text-sm font-semibold">Value</th>
              <th className="p-3 text-sm font-semibold">Expiry</th>
              <th className="p-3 text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.code} className="border-t border-slate-100">
                <td className="p-3 font-medium">{coupon.code}</td>
                <td className="p-3">{coupon.type}</td>
                <td className="p-3">{coupon.value}</td>
                <td className="p-3">{coupon.expiry}</td>
                <td className="p-3">{coupon.active ? "Active" : "Expired"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponSection;
