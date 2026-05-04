const statsData = [
  {
    id: 1,
    value: "$12.5M",
    label: "Total revenue from 2001 - 2023",
  },
  {
    id: 2,
    value: "12K+",
    label: "Orders delivered successfully everyday",
  },
  {
    id: 3,
    value: "725+",
    label: "Store and office in U.S and worldwide",
  },
];

const AboutStats = () => {
  return (
    <section className="w-full px-4 py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 lg:p-10">
        
        {/* TOP TEXT */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-600 uppercase">
            Our purpose is to{" "}
            <span className="text-green-600 font-bold">
              enrich and enhance
            </span>{" "}
            lives through technology
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="text-left border-t pt-4 lg:border-none lg:pt-0"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {item.value}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;