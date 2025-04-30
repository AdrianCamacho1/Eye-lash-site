const Footer = () => (
  <footer className="bg-[#333333] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-[#FFD1DC] mb-4">
            LASH STUDIO MIAMI
          </h3>
          <p className="mb-4">123 Glam Street, Miami, FL 33130</p>
          <p className="mb-4">
            Email:{" "}
            <a
              href="mailto:contact@lashstudiomiami.com"
              className="text-[#FFD1DC] hover:underline"
            >
              contact@lashstudiomiami.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+17864002775"
              className="text-[#FFD1DC] hover:underline"
            >
              (786) 400-2775
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Book Now
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#FFD1DC] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Classic Lashes
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Volume Lashes
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Hybrid Lashes
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Lash Lift & Tint
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#FFD1DC] transition-colors"
              >
                Lash Removal
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="hover:text-[#FFD1DC] transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[#FFD1DC] transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.597 1.8 1.161.563.563.908 1.13 1.16 1.798.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.16 1.797c-.563.563-1.13.909-1.798 1.16-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-4.197.06h-.074c-2.818 0-3.173-.012-4.197-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.797-1.16c-.563-.563-.909-1.13-1.16-1.798-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-4.197v-.074c0-2.818.013-3.173.06-4.197.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.16-1.797c.563-.563 1.13-.909 1.798-1.16.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.9 2 12.315 2zm0 1.802h-.075c-2.116 0-2.45.01-3.47.05-.84.04-1.293.18-1.6.298-.39.15-.67.33-.96.62-.29.29-.47.57-.62.96-.12.31-.26.76-.29 1.6-.04 1.02-.05 1.35-.05 3.97v.08c0 2.62.01 2.95.05 3.97.04.84.18 1.29.29 1.6.15.39.33.67.62.96.29.29.57.47.96.62.31.12.76.26 1.6.29 1.02.04 1.35.05 3.97.05h.08c2.62 0 2.95-.01 3.97-.05.84-.04 1.29-.18 1.6-.29.39-.15.67-.33.96-.62.29-.29.47-.57.62-.96.12-.31.26-.76.29-1.6.04-1.02.05-1.35.05-3.97v-.08c0-2.62-.01-2.95-.05-3.97-.04-.84-.18-1.29-.29-1.6a2.49 2.49 0 00-.62-.96 2.49 2.49 0 00-.96-.62c-.31-.12-.76-.26-1.6-.29-1.02-.04-1.35-.05-3.97-.05z" />
                <path d="M12.315 5.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zM8.153 10a4.162 4.162 0 118.324 0 4.162 4.162 0 01-8.324 0zM16.76 5.595a.95.95 0 100 1.9.95.95 0 000-1.9z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[#FFD1DC] transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Get Lash Updates & Offers
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email for newsletter"
              className="px-4 py-2 rounded-l-full focus:outline-none text-[#3C3C3C] w-full"
            />
            <button
              type="submit"
              className="bg-[#D9A7B3] px-4 py-2 rounded-r-full hover:bg-[#FFD1DC] transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-700 text-center">
        <div className="mb-4">
          <p className="text-sm text-gray-400">
            Hours: Monday-Friday 10am-8pm | Saturday 10am-6pm | Sunday Closed
          </p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lash Studio Miami. All rights
          reserved.
          <span className="mx-2">|</span>
          <a href="#" className="text-[#FFD1DC] hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-[#FFD1DC] hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
