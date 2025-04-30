import { useState } from "react";

const faqs = [
  {
    question: "How long do lash extensions last?",
    answer:
      "Lash extensions typically last for the full growth cycle of your natural lashes, about 6-8 weeks. However, because each lash is at a different stage in its growth cycle, fills are recommended every 2-3 weeks to maintain a full look as natural lashes shed.",
  },
  {
    question: "Are lash extensions safe?",
    answer:
      "Yes! Our lash extensions are applied by certified professionals using high-quality, medical-grade adhesives specifically formulated for use around the eyes. We follow strict hygiene protocols and customize each application to your eye shape and natural lashes to ensure safety and comfort.",
  },
  {
    question: "Do lash extensions damage natural lashes?",
    answer:
      "When applied correctly by a trained professional, lash extensions should not damage your natural lashes. We carefully select the appropriate weight and length for your natural lashes and apply them properly to prevent any stress or breakage.",
  },
  {
    question: "How should I prepare for my lash appointment?",
    answer:
      "Come to your appointment with clean lashes, free of makeup, oils, and mascara. Avoid caffeine before your appointment as it can cause eye twitching. If you wear contacts, consider bringing your glasses as you'll need to keep your eyes closed throughout the procedure.",
  },
  {
    question: "How do I take care of my lash extensions?",
    answer:
      "For the first 24-48 hours, avoid getting your lashes wet and stay away from steam, saunas, and hot yoga. Avoid oil-based products near your eyes, rubbing or pulling at your lashes, and sleeping face-down. Use a gentle, oil-free cleanser and brush your lashes daily with a clean spoolie brush.",
  },
  {
    question:
      "What's the difference between classic, volume, and hybrid lashes?",
    answer:
      "Classic lashes involve applying one extension to each natural lash for a more natural look. Volume lashes use multiple lightweight extensions per natural lash, creating a fuller, fluffier appearance. Hybrid lashes combine both techniques for a textured look with both definition and volume.",
  },
  {
    question: "Can I wear mascara with lash extensions?",
    answer:
      "We don't recommend wearing mascara with lash extensions, especially oil-based formulas which can break down the adhesive. Your lash extensions will give you the look of mascara without the need for daily application. If you do want to enhance your look occasionally, use a water-based mascara applied only to the tips and remove it gently.",
  },
  {
    question: "Is the lash extension process painful?",
    answer:
      "Not at all! The lash extension process is gentle and relaxing. Many clients actually fall asleep during their appointments. Your eyes are closed throughout the procedure, and our professionals work with a gentle touch to ensure your comfort.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333333]">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
            Find answers to common questions about our lash extension services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors ${
                  openIndex === index
                    ? "bg-[#F8F0F3] shadow-md"
                    : "bg-white border border-gray-200 hover:bg-[#F8F0F3] hover:border-[#F8F0F3]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-[#3C3C3C]">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#D9A7B3] transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="bg-white p-5 border border-t-0 border-gray-200 rounded-b-lg shadow-md">
                  <p className="text-[#6D6D6D]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#6D6D6D] mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
