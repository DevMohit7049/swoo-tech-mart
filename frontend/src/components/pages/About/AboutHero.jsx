import aboutHero from "@/assets/ecommerce/About/about-hero.png";

const AboutHero = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
          {/* RIGHT IMAGE */}
          <div className="w-full h-full">
            <img
              src={aboutHero}  
              alt="About Hero"
              className="w-full h-full object-cover "
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;