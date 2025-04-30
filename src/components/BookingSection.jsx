import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Lash Extensions",
    description: "Full set of premium lash extensions",
    price: "$120",
    duration: "120 min",
    options: [
      { id: 1, name: "Classic Lashes", price: "$120", duration: "120 min" },
      { id: 2, name: "Hybrid Lashes", price: "$140", duration: "120 min" },
      { id: 3, name: "Volume Lashes", price: "$160", duration: "150 min" },
      { id: 4, name: "Mega Volume", price: "$180", duration: "180 min" },
    ],
  },
  {
    id: 2,
    name: "Lash Fills",
    description: "Maintenance for your existing lash extensions",
    price: "$75",
    duration: "60 min",
    options: [
      { id: 1, name: "Classic Fill", price: "$75", duration: "60 min" },
      { id: 2, name: "Hybrid Fill", price: "$85", duration: "75 min" },
      { id: 3, name: "Volume Fill", price: "$95", duration: "90 min" },
      { id: 4, name: "Mega Volume Fill", price: "$110", duration: "120 min" },
    ],
  },
  {
    id: 3,
    name: "Lash Lift & Tint",
    description: "Natural lash enhancement",
    price: "$90",
    duration: "60 min",
    options: [
      { id: 1, name: "Lash Lift", price: "$70", duration: "45 min" },
      { id: 2, name: "Lash Tint", price: "$40", duration: "30 min" },
      { id: 3, name: "Lift & Tint Package", price: "$90", duration: "60 min" },
    ],
  },
  {
    id: 4,
    name: "Brow Services",
    description: "Enhance your brows",
    price: "$60",
    duration: "45 min",
    options: [
      { id: 1, name: "Brow Lamination", price: "$80", duration: "45 min" },
      { id: 2, name: "Brow Tint", price: "$30", duration: "30 min" },
      { id: 3, name: "Lamination & Tint", price: "$90", duration: "60 min" },
      { id: 4, name: "Brow Shaping", price: "$25", duration: "15 min" },
    ],
  },
];

// Days of the week
const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

// Generate dates for the current month
const generateCalendarDays = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Create date for first day of the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDay.getDay();

  // Calculate total days in the calendar view (previous month + current month)
  const daysArray = [];

  // Add empty spaces for days from previous month
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysArray.push(null);
  }

  // Add days from current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    daysArray.push(new Date(year, month, i));
  }

  return daysArray;
};

// Sample time slots
const generateTimeSlots = () => {
  return [
    "10:00 AM - 12:00 PM",
    "12:30 PM - 2:30 PM",
    "3:00 PM - 5:00 PM",
    "5:30 PM - 7:30 PM",
  ];
};

const BookingSection = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceOption, setSelectedServiceOption] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    receiveUpdates: false,
    acceptCancellation: false,
  });

  // Calendar days
  const calendarDays = generateCalendarDays(currentDate);

  // Time slots based on selected date
  const timeSlots = generateTimeSlots();

  // Handle month navigation
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedServiceOption(null);
    setBookingStep(2);
  };

  // Handle service option selection
  const handleServiceOptionSelect = (option) => {
    setSelectedServiceOption(option);
    setBookingStep(3);
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setBookingStep(4);
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingStep(5);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setClientInfo({
      ...clientInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      service: selectedService,
      serviceOption: selectedServiceOption,
      date: selectedDate,
      time: selectedTime,
      clientInfo,
    });

    // Show confirmation message or redirect
    alert("Booking submitted successfully!");

    // Reset booking flow
    setBookingStep(1);
    setSelectedService(null);
    setSelectedServiceOption(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      receiveUpdates: false,
      acceptCancellation: false,
    });
  };

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "";
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333333]">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-[#D9A7B3] mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-[#6D6D6D] max-w-2xl mx-auto">
            Schedule your beauty treatment in a few simple steps
          </p>
        </div>

        {/* Booking process steps indicator */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center max-w-3xl w-full justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                  bookingStep >= step
                    ? "bg-[#D9A7B3] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Step labels */}
        <div className="flex justify-center mb-10 text-sm">
          <div className="flex items-center max-w-3xl w-full justify-between">
            <div className="text-center w-20">Select Service</div>
            <div className="text-center w-20">Choose Type</div>
            <div className="text-center w-20">Select Date</div>
            <div className="text-center w-20">Select Time</div>
            <div className="text-center w-20">Your Details</div>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {bookingStep === 1 && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">
              Select a Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="border border-gray-200 p-6 rounded-lg cursor-pointer hover:border-[#D9A7B3] transition-colors"
                >
                  <h4 className="text-lg font-semibold">{service.name}</h4>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <div className="mt-4 flex justify-between">
                    <span className="text-[#D9A7B3] font-semibold">
                      Starting at {service.price}
                    </span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Service Option */}
        {bookingStep === 2 && selectedService && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setBookingStep(1)}
              className="mb-6 flex items-center text-[#D9A7B3]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Services
            </button>

            <h3 className="text-xl font-semibold mb-6">
              Select {selectedService.name} Type
            </h3>

            <div className="space-y-4">
              {selectedService.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleServiceOptionSelect(option)}
                  className="border border-gray-200 p-4 rounded-lg cursor-pointer hover:border-[#D9A7B3] transition-colors"
                >
                  <h4 className="font-medium">{option.name}</h4>
                  <div className="mt-2 flex justify-between">
                    <span className="text-[#D9A7B3] font-semibold">
                      {option.price}
                    </span>
                    <span className="text-gray-500">{option.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Date */}
        {bookingStep === 3 && selectedServiceOption && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setBookingStep(2)}
              className="mb-6 flex items-center text-[#D9A7B3]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Options
            </button>

            <h3 className="text-xl font-semibold mb-6">Select a Date</h3>

            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <h4 className="text-lg font-medium">
                  {currentDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h4>

                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Calendar grid - days of the week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className="text-center py-2 text-sm font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid - dates */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, index) => (
                  <div key={index} className="aspect-square">
                    {date ? (
                      <button
                        onClick={() => handleDateSelect(date)}
                        className={`w-full h-full flex items-center justify-center rounded-full text-sm
                          ${
                            date < new Date().setHours(0, 0, 0, 0)
                              ? "text-gray-300 cursor-not-allowed"
                              : selectedDate &&
                                date.toDateString() ===
                                  selectedDate.toDateString()
                              ? "bg-[#D9A7B3] text-white"
                              : "hover:bg-[#F5E1DC] text-gray-700"
                          }`}
                        disabled={date < new Date().setHours(0, 0, 0, 0)}
                      >
                        {date.getDate()}
                      </button>
                    ) : (
                      <div className="w-full h-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Select Time */}
        {bookingStep === 4 && selectedDate && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setBookingStep(3)}
              className="mb-6 flex items-center text-[#D9A7B3]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Calendar
            </button>

            <h3 className="text-xl font-semibold mb-2">Select a Time</h3>
            <p className="text-gray-600 mb-6">{formatDate(selectedDate)}</p>

            <div className="space-y-3">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(time)}
                  className={`w-full py-3 px-4 text-left border rounded-lg ${
                    selectedTime === time
                      ? "border-[#D9A7B3] bg-[#F5E1DC]"
                      : "border-gray-200 hover:border-[#D9A7B3]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              Scroll down for more availabilities
            </p>
          </div>
        )}

        {/* Step 5: Enter Client Information */}
        {bookingStep === 5 && selectedTime && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setBookingStep(4)}
              className="mb-6 flex items-center text-[#D9A7B3]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Time Selection
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Your Information</h3>
              <p className="text-gray-600 mt-2">
                {selectedService?.name} - {selectedServiceOption?.name} <br />
                {formatDate(selectedDate)} at {selectedTime}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={clientInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D9A7B3] focus:border-[#D9A7B3]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={clientInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D9A7B3] focus:border-[#D9A7B3]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={clientInfo.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D9A7B3] focus:border-[#D9A7B3]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D9A7B3] focus:border-[#D9A7B3]"
                />
              </div>

              <div className="mt-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={clientInfo.receiveUpdates}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#D9A7B3] focus:ring-[#D9A7B3]"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Get important updates from Lash Studio Miami. By checking
                    this box, you consent to receive automated text messages at
                    this number. Consent is not a condition of purchase. Text
                    STOP to stop and HELP for help. Msg frequency varies.
                    Msg&data rates may apply. View Terms & Privacy
                  </span>
                </label>
              </div>

              <div className="mt-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptCancellation"
                    checked={clientInfo.acceptCancellation}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-[#D9A7B3] focus:ring-[#D9A7B3]"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I acknowledge & accept the Cancellation Policy: 12hrs
                    advance notice & a 45% cancellation fee.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-[#D9A7B3] text-white rounded-full hover:bg-[#C29F8A] transition-colors"
              >
                Complete Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
