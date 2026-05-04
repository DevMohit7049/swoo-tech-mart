import aboutIntro from "@/assets/ecommerce/About/about-intro.png"

const AboutIntro = () => {
  return (
    <section className="w-full px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT IMAGE CARD */}
        <div className="bg-green-600 rounded-2xl overflow-hidden flex items-end justify-center relative">
          <img
            src={aboutIntro}
            alt="Delivery Guy"
            className="object-contain h-[300px] lg:h-[400px]"
          />

          {/* Optional subtle overlay text (like your UI background text) */}
          <h2 className="absolute left-6 bottom-6 text-white/10 text-5xl font-bold">
            SWOO
          </h2>
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-10 flex flex-col justify-center">
          
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-snug">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h2>

          <p className="mt-4 text-gray-500 text-sm lg:text-base leading-relaxed">
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage & scale their businesses.
          </p>

          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition">
              Our Showreel
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;