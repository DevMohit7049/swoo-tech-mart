const AnalyticsSection = () => {
  const cards = [
    { label: "Total Sales", value: "₹12,45,600" },
    { label: "Revenue", value: "₹9,86,430" },
    { label: "Orders Count", value: "1,284" },
    { label: "Top Products", value: "Gaming Mouse, iPhone 16, Dell 15" },
    { label: "User Growth", value: "+18.2% this month" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Analytics & Dashboard</h2>
        <p className="text-sm text-slate-500">Sales, orders, top products and growth metrics overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((item) => (
          <div key={item.label} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="text-lg font-bold text-slate-900 mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
