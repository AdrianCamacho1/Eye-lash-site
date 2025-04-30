import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Classic Lashes",
    description:
      "Natural-looking lash extensions with one extension applied to each natural lash.",
    features: [
      "Natural look",
      "Lightweight feel",
      "Perfect for beginners",
      "Adds length and definition",
    ],
    details:
      "One synthetic extension per natural lash creating subtle enhancement",
    image: "/classic-lashes.jpg",
  },
  {
    id: 2,
    name: "Volume Lashes",
    description:
      "Multiple thin extensions applied to each natural lash for a fuller, fluffier look.",
    features: [
      "Fullness and volume",
      "Customizable intensity",
      "Dramatic effect",
      "Perfect for sparse lashes",
    ],
    details:
      "2-6 ultra-light extensions per natural lash creating fluffy, full appearance",
    image: "/volume-lashes.jpg",
  },
  {
    id: 3,
    name: "Hybrid Lashes",
    description:
      "A mix of classic and volume techniques for the perfect balance of definition and fullness.",
    features: [
      "Best of both worlds",
      "Textured look",
      "Natural yet noticeable",
      "Versatile style",
    ],
    details:
      "Combination of classic and volume techniques for dimension and texture",
    image: "/hybrid-lashes.jpg",
  },
  {
    id: 4,
    name: "Lash Lift & Tint",
    description:
      "A semi-permanent treatment that curls and darkens your natural lashes for a mascara-like effect.",
    features: [
      "No extensions needed",
      "Low maintenance",
      "Natural enhancement",
      "Lasts 6-8 weeks",
    ],
    details:
      "Curls and tints your natural lashes for a mascara-like effect without daily makeup",
    image: "/lash-lift.jpg",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="py-24 bg-white" id="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333333]">
            Our Lash Services
          </h2>
          <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
            Discover our range of premium lash services designed to enhance your
            natural beauty and give your eyes the perfect frame they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#6D6D6D] mb-4">{service.description}</p>

                <div
                  className="cursor-pointer flex justify-between items-center text-[#D9A7B3] font-medium"
                  onClick={() => toggleService(service.id)}
                >
                  <span>
                    {activeService === service.id
                      ? "Hide details"
                      : "Show details"}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      activeService === service.id ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {activeService === service.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                    <p className="mb-3 text-[#3C3C3C]">{service.details}</p>
                    <h4 className="font-medium text-[#3C3C3C] mb-2">
                      Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-[#6D6D6D]"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-[#D9A7B3]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#booking"
                      className="inline-block mt-4 px-5 py-2 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors"
                    >
                      Book This Service
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-block px-8 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors shadow-md"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
