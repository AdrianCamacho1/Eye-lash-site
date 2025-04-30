const pricing = [
  {
    service: "Classic Lashes",
    price: "$120",
    description:
      "Natural-looking lash extensions applied one per natural lash.",
    details: ["Full Set", "Fills from $75", "2-3 Week Touch Up"],
    duration: "90 mins",
    popular: false,
  },
  {
    service: "Volume Lashes",
    price: "$150",
    description: "Multiple lightweight extensions for a fuller, fluffier look.",
    details: ["Full Set", "Fills from $95", "2-3 Week Touch Up"],
    duration: "120 mins",
    popular: true,
  },
  {
    service: "Hybrid Lashes",
    price: "$135",
    description: "Perfect blend of classic and volume for natural fullness.",
    details: ["Full Set", "Fills from $85", "2-3 Week Touch Up"],
    duration: "105 mins",
    popular: false,
  },
  {
    service: "Lash Lift & Tint",
    price: "$90",
    description: "Curls and darkens natural lashes without extensions.",
    details: ["Lift & Tint Combo", "Lift Only $70", "Tint Only $30"],
    duration: "60 mins",
    popular: false,
  },
];

const PricingSection = () => (
  <section className="py-24 bg-[#F8F0F3]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#333333]">Our Pricing</h2>
        <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
          Invest in your lashes with our premium services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricing.map((item) => (
          <div
            key={item.service}
            className={`relative overflow-hidden rounded-xl shadow-lg ${
              item.popular
                ? "bg-white ring-2 ring-[#D9A7B3] transform scale-105 z-10"
                : "bg-white"
            }`}
          >
            {item.popular && (
              <div className="absolute top-0 right-0 bg-[#D9A7B3] text-white text-xs font-bold px-3 py-1 uppercase">
                Most Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#3C3C3C]">
                {item.service}
              </h3>
              <div className="mt-4 text-3xl font-bold text-[#D9A7B3]">
                {item.price}
              </div>
              <p className="mt-2 text-sm text-[#6D6D6D]">{item.duration}</p>
              <p className="mt-4 text-[#6D6D6D]">{item.description}</p>

              <ul className="mt-6 space-y-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-[#6D6D6D]">
                    <svg
                      className="w-4 h-4 text-[#D9A7B3] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#booking"
                  className={`block text-center px-6 py-3 rounded-full ${
                    item.popular
                      ? "bg-[#D9A7B3] text-white hover:bg-[#FFD1DC]"
                      : "bg-white border border-[#D9A7B3] text-[#D9A7B3] hover:bg-[#F5E1DC]"
                  } transition-colors shadow-md`}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-[#3C3C3C]">
          Need a Custom Package?
        </h3>
        <p className="mt-2 text-[#6D6D6D]">
          Contact us for personalized lash services tailored to your specific
          needs.
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-2 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors shadow-md"
        >
          Contact for Custom Quote
        </a>
      </div>
    </div>
  </section>
);

export default PricingSection;
