import { useState, useEffect, useRef } from "react";

// Gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    category: "Classic",
    before: "/before-classic-1.jpg",
    after: "/after-classic-1.jpg",
    title: "Natural Classic Lashes",
  },
  {
    id: 2,
    category: "Volume",
    before: "/before-volume-1.jpg",
    after: "/after-volume-1.jpg",
    title: "Dramatic Volume Set",
  },
  {
    id: 3,
    category: "Hybrid",
    before: "/before-hybrid-1.jpg",
    after: "/after-hybrid-1.jpg",
    title: "Hybrid Lash Enhancement",
  },
  {
    id: 4,
    category: "Lift",
    before: "/before-lift-1.jpg",
    after: "/after-lift-1.jpg",
    title: "Lash Lift & Tint",
  },
  {
    id: 5,
    category: "Classic",
    before: "/before-classic-2.jpg",
    after: "/after-classic-2.jpg",
    title: "Subtle Classic Curl",
  },
  {
    id: 6,
    category: "Volume",
    before: "/before-volume-2.jpg",
    after: "/after-volume-2.jpg",
    title: "Mega Volume Fullness",
  },
  {
    id: 7,
    category: "Hybrid",
    before: "/before-hybrid-2.jpg",
    after: "/after-hybrid-2.jpg",
    title: "Textured Hybrid Look",
  },
  {
    id: 8,
    category: "Lift",
    before: "/before-lift-2.jpg",
    after: "/after-lift-2.jpg",
    title: "Natural Lash Enhancement",
  },
];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const [animatedItems, setAnimatedItems] = useState([]);
  const galleryRef = useRef(null);

  const categories = ["All", "Classic", "Volume", "Hybrid", "Lift"];

  const filteredGallery =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  // Handle intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the id of the intersecting item
            const id = parseInt(entry.target.dataset.id);
            setAnimatedItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Get all gallery items
    const galleryItemElements = document.querySelectorAll(".gallery-item");
    galleryItemElements.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      galleryItemElements.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [filter]); // Re-run when filter changes

  return (
    <section className="py-24 bg-white" ref={galleryRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333333]">
            Our Transformations
          </h2>
          <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
            See the stunning before and after results from our lash services
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-[#D9A7B3] p-1 overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                  filter === category
                    ? "bg-[#D9A7B3] text-white"
                    : "bg-transparent text-[#3C3C3C] hover:bg-[#F5E1DC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`gallery-item overflow-hidden rounded-lg shadow-lg bg-white 
                ${
                  animatedItems.includes(item.id)
                    ? "animate-fadeIn"
                    : "opacity-0"
                }`}
            >
              <div className="relative h-64 group">
                {/* Before image */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={item.before}
                    alt={`Before ${item.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 bg-[#D9A7B3] text-white px-4 py-1 text-sm rounded-br-lg">
                    Before
                  </div>
                </div>

                {/* After image */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <img
                    src={item.after}
                    alt={`After ${item.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 bg-[#D9A7B3] text-white px-4 py-1 text-sm rounded-bl-lg">
                    After
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#3C3C3C]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6D6D6D] mt-1">
                  {item.category} Lashes
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6D6D6D] mb-4">
            Hover over images to see the transformation
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors shadow-md"
          >
            Book Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
