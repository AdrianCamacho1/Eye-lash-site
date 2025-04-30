const ContactAndBookingSection = () => (
  <section className="py-24 bg-[#F5E1DC] relative">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="w-full h-full" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #D9A7B3 0, #D9A7B3 1px, transparent 0, transparent 10px)",
      }}></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#3C3C3C]">Get in Touch</h2>
        <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
          Ready to enhance your natural beauty? Book your consultation today!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#3C3C3C] mb-6">Send us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#6D6D6D] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9A7B3] focus:border-transparent"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#6D6D6D] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9A7B3] focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#6D6D6D] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9A7B3] focus:border-transparent"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#6D6D6D] mb-1">
                Service of Interest
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9A7B3] focus:border-transparent"
              >
                <option value="">Select a Service</option>
                <option value="brows">Brows</option>
                <option value="lips">Lips</option>
                <option value="eyes">Eyes</option>
                <option value="styling">Long Lasting Styling</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#6D6D6D] mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9A7B3] focus:border-transparent"
                placeholder="Tell us about your questions or what you're looking for..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#C29F8A] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact information */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#3C3C3C] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-[#D9A7B3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-[#3C3C3C]">Our Location</h4>
                  <p className="mt-1 text-[#6D6D6D]">123 Beauty St, Miami, FL 33130</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-[#D9A7B3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2a15 15 0 01-15-15V4a1 1 0 011-1z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-[#3C3C3C]">Call Us</h4>
                  <p className="mt-1 text-[#6D6D6D]">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-[#D9A7B3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 10l7.997-4.116A1 1 0 0017 5H3a1 1 0 00-.997.884zM18 8.118l-8 4-8-4V14a1 1 0 001 1h14a1 1 0 001-1V8.118z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-[#3C3C3C]">Email Us</h4>
                  <p className="mt-1 text-[#6D6D6D]">info@beautysalon.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#3C3C3C] mb-6">Business Hours</h3>
            <ul className="space-y-2 text-[#6D6D6D]">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default ContactAndBookingSection;