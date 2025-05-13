import { Input } from "postcss";
import { React, useState } from "react";
//- 5. Contact / Lead Form - Name, Email, Company, License Type (dropdown), Message

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const handleSubmit = () => {};
  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className=" m-10 rounded-2xl border  p-6"
    >
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <div className="flex flex-col ">
        <label htmlFor="name" className="font-semibold mb-1">
          Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="focus:outline-none rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="email" className="font-semibold mb-1">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="focus:outline-none rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="company" className="font-semibold mb-1">
          Company:
        </label>
        <input
          type="text"
          name="company"
          placeholder="xyz"
          required
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          className="focus:outline-none rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <select
        name="license"
        value="license"
        onChange={(e) => {
          setLicense(e.target.value);
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        required
      >
        <option value="">Select License Type</option>
        <option value="office">Microsoft Office</option>
        <option value="adobe">Adobe Suite</option>
        <option value="antivirus">Antivirus</option>
        <option value="antivirus">Oracle</option>
      </select>
      <div className="mx-auto w-1/12 text-center">
        <button
          type="submit"
          className="rounded-xl text-xl p-2 bg-blue-500 hover:bg-blue-700 text-white  transition "
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Contact;
