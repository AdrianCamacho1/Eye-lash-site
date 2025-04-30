const HeroSection = () => (
  <section
    className="relative bg-cover bg-center min-h-screen flex items-center overflow-hidden"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/lash-hero-bg.jpg')",
    }}
  >
    {/* Floating eyelashes decoration */}
    <div className="absolute top-1/4 -left-20 w-40 h-40 opacity-40">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-white fill-current"
      >
        <path
          d="M10,50 Q30,20 50,50 Q70,80 90,50"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M10,60 Q30,30 50,60 Q70,90 90,60"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    </div>
    <div className="absolute bottom-1/4 -right-20 w-40 h-40 opacity-40 rotate-180">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-white fill-current"
      >
        <path
          d="M10,50 Q30,20 50,50 Q70,80 90,50"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M10,60 Q30,30 50,60 Q70,90 90,60"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    </div>

    {/* Glitter effect */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-300"></div>
      <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-700"></div>
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-500"></div>
      <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Elevate Your <span className="text-[#FFD1DC] italic">Beauty</span>{" "}
          With Luxurious Lashes
        </h1>
        <div className="h-1 w-24 bg-[#FFD1DC] mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed">
          Premium lash extensions customized to enhance your natural beauty by
          certified lash artists in the heart of Miami
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#booking"
            className="px-10 py-4 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors text-lg font-medium shadow-lg transform hover:scale-105 duration-300"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#3C3C3C] transition-colors text-lg font-medium transform hover:scale-105 duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>

    {/* Curved bottom */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L48 5.3C96 10.7 192 21.3 288 26.7C384 32 480 32 576 26.7C672 21.3 768 10.7 864 10.7C960 10.7 1056 21.3 1152 32C1248 42.7 1344 53.3 1392 58.7L1440 64V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);

export default HeroSection;
