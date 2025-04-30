const AboutSection = () => (
  <section className="py-24 bg-[#F8F0F3]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image or photo of the lash artist */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-[#D9A7B3] rounded-full -z-10"></div>
            <div className="relative rounded-xl shadow-xl overflow-hidden">
              <img
                src="/lash-artist.jpg"
                alt="Sophia Rodriguez - Master Lash Artist"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold text-white">
                  Sophia Rodriguez
                </h3>
                <p className="text-gray-200">Certified Master Lash Artist</p>
              </div>
            </div>
          </div>
        </div>

        {/* About text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#3C3C3C] mb-8">
            Meet Your Lash Artist
          </h2>
          <div className="w-24 h-1 bg-[#D9A7B3] mb-8"></div>

          <p className="text-lg text-[#6D6D6D] mb-6">
            With over 7 years of experience in the lash industry, Sophia has
            built a reputation as one of Miami's premier lash artists, known for
            her meticulous attention to detail and commitment to lash health.
          </p>

          <p className="text-lg text-[#6D6D6D] mb-6">
            Certified by the American Lash Association and a graduate of the
            renowned Beauty Masters Academy, Sophia specializes in custom lash
            designs that complement each client's unique eye shape and personal
            style.
          </p>

          <p className="text-lg text-[#6D6D6D] mb-8">
            Her passion for continuous education ensures she stays at the
            forefront of lash innovation, bringing the latest techniques and
            highest quality products to her loyal clientele.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#D9A7B3]">7+</h3>
              <p className="text-sm text-[#6D6D6D] uppercase tracking-wider mt-2">
                Years Experience
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#D9A7B3]">2,000+</h3>
              <p className="text-sm text-[#6D6D6D] uppercase tracking-wider mt-2">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                <img
                  src="/certification-1.png"
                  alt="Certification"
                  className="w-8 h-8"
                  loading="lazy"
                />
              </div>
              <span className="text-[#6D6D6D] text-sm">
                Certified Lash Artist
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                <img
                  src="/certification-2.png"
                  alt="Certification"
                  className="w-8 h-8"
                  loading="lazy"
                />
              </div>
              <span className="text-[#6D6D6D] text-sm">Volume Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                <img
                  src="/certification-3.png"
                  alt="Certification"
                  className="w-8 h-8"
                  loading="lazy"
                />
              </div>
              <span className="text-[#6D6D6D] text-sm">
                Health & Safety Certified
              </span>
            </div>
          </div>

          <a
            href="#booking"
            className="inline-block mt-10 px-8 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors shadow-md"
          >
            Book With Sophia
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
