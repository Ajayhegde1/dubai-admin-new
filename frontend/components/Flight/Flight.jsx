"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavBar } from "../NavBar/NavBar";
import Link from "next/link";

export default function FlightBookingPage() {
  const [formData, setFormData] = useState({
    cabinOption: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    dob: new Date(),
    gender: "",
    placeOfDeparture: "",
    destination: "",
    preferredAirline: "",
    ETD: new Date(),
    ETA: new Date(),
    seat: "",
    meals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <NavBar />
      <section className="container mx-auto py-8">
        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden py-[1vh]">
          <div className="px-8">
            <h1 className="text-[30px] font-[700]">Flight Booking</h1>
          </div>
          <div className="bg-gray-100 px-6 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-gray-800">Personal Info</h1>
          </div>
          <div className="px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-4 ">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 pl-2 mt-2">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  name="FirstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 mt-2">
                <label className="block text-gray-700 font-bold mb-2">
                  Middle Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your Middle Name"
                  name="MiddleName"
                  value={formData.MiddleName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 mt-2">
                <label className="block text-gray-700 font-bold mb-2 pl-2">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  placeholder="Enter your Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email Address:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 ">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  placeholder="Enter Your DOB"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block  font-bold text-gray-700 mb-2">
                  Gender :
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    value="others"
                    onChange={handleChange}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-gray-800">
              Flight Details / Preferences
            </h1>
          </div>

          <div className=" gap-4 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-4 ">
              <div className="mb-4">
                <label
                  htmlFor="preferredAirline"
                  className="block  font-bold text-gray-700"
                >
                  Cabin Option
                </label>
                <select
                  name="preferredAirline"
                  id="preferredAirline"
                  className="mt-[1vh] p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange}
                >
                  <option value="">Select Cabin</option>
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business Class">Business Class</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Place of Departure :
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Place of Departure"
                  name="placeOfDeparture"
                  value={formData.placeOfDeparture}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 ">
                <label className="block text-gray-700 font-bold mb-2 pl-2">
                  Destination:
                </label>
                <input
                  type="text"
                  placeholder="Enter your Destination"
                  name="destinantion"
                  value={formData.destination}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-4  ">
              <div className="mb-4">
                <label
                  htmlFor="preferredAirline"
                  className="block  font-bold text-gray-700"
                >
                  Preferred Airline
                </label>
                <select
                  name="preferredAirline"
                  id="preferredAirline"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange}
                >
                  <option value="">Select Airline</option>
                  <option value="Luftanza">Luftanza</option>
                  <option value="IndiGo">IndiGo</option>
                  <option value="Emirates">Emirates</option>
                  <option value="Air India">Air India</option>
                </select>
              </div>
              <div className="mb-4 ">
                <label htmlFor="ETD" className="block  font-bold text-gray-700">
                  Estimated Time of Departure
                </label>
                <input
                  type="datetime-local"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(date) => handleDateChange("ETD", date)}
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="ETA" className="block font-bold text-gray-700">
                  Estimated Time of Arrival
                </label>
                <input
                  type="datetime-local"
                  onChange={(date) => handleDateChange("ETA", date)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-4 ">
              <div className="grid grid-cols-2 w-full gap-4 ">
                <div className="mb-4">
                  <label
                    htmlFor="seat"
                    className="block  font-bold text-gray-700"
                  >
                    Preferred Seat :
                  </label>
                  <select
                    name="seat"
                    id="seat"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                    onChange={handleChange}
                  >
                    <option value="">Select Seat</option>
                    <option value="Window">Window</option>
                    <option value="Aisle">Aisle</option>
                    <option value="Middle">Middle</option>
                    <option value="Extra Leg Room">Extra Leg Room</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="meals"
                    className="block  font-bold text-gray-700"
                  >
                    Preferred Meals :
                  </label>
                  <select
                    name="meals"
                    id="meals"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={handleChange}
                  >
                    <option value="">Select Meal</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-vegetarian">Non-vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Medical History :
                </label>
                <input
                  type="text"
                  placeholder="Medical History, if any"
                  name="medicalHistory"
                  value={formData.placeOfDeparture}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 w-[24.9vw]"></div>
            </div>
          </div>
          <div className="lg:px-[1.8vw] md:px-[1.8vw] xl:px-[1.8vw] 2xl:px-[1.8vw] px-[7vw] mt-[-5vh] lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0">
            <Link href="/V1/SuccessScreenFlightsPage">
              <button className="bg-[#14A800] lg:px-[1vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw] px-[4vw]  py-[1vh] rounded-full text-white font-[700]">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
