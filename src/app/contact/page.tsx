"use client";
import { useState } from "react";
import { z } from "zod";

export default function Quote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [showAddtionalName, setShowAdditionalName] = useState({});
  const [showCompanyName, setShowCompanyName] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally reset the form
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="p-8 md:w-4/5 bg-white">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Insured Names:</legend>
          <label htmlFor="isCompany">Company Name</label>
          <input type="checkbox" />
          <ul className="flex flex-row w-full gap-x-4">
            <li className="flex flex-col flex-1">
              <label htmlFor="firstName">Insured First Name</label>
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder="Insured First Name"
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col flex-1 ">
              <label htmlFor="lastName">Insured Last Name</label>
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Insured Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </li>
          </ul>
          <button className="btn-primary">Add addtional insured</button>
          <ul className="flex flex-row w-full gap-x-4">
            <li className="flex flex-col flex-1">
              <label htmlFor="firstName">Additional Insured First Name</label>
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder="Second Insured First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col flex-1">
              <label htmlFor="lastName">Additional Insured Last Name</label>
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Second Insured Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </li>
          </ul>
          <li className="flex flex-col">
            <label htmlFor="lastName">Company</label>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Company"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="lastName">Operting As</label>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Operating As"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </li>
        </fieldset>
        <hr />
        <fieldset className="grid grid-cols-2">
          <legend>Contact Information:</legend>
          <ul>
            <li className="flex flex-col">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="input"
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Date of Birth</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Date of Birth"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
          </ul>
          <legend>Mailing Address:</legend>
          <ul>
            <li className="flex flex-col">
              <label htmlFor="email">Street Address</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Street Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">City</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="City"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Province</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Province"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Country</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Country"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <li className="flex flex-col">
                <label htmlFor="email">Postal Code</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Postal Code"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </li>
            </li>
          </ul>
          <hr />
          <legend>Risk Address:</legend>
          <ul>
            <li className="flex flex-col">
              <label htmlFor="email">Street Address</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Street Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">City</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="City"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Province</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Province"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email">Country</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Country"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <li className="flex flex-col">
                <label htmlFor="email">Postal Code</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Postal Code"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </li>
            </li>
          </ul>

          <button className="btn-primary" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
