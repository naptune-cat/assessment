import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-blue-300 shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">SoftSell</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#how-it-works" className=" rounded-xl p-1 hover:bg-white">
            How it works
          </a>
          <a href="#why-choose-us" className=" rounded-xl p-1 hover:bg-white">
            Why us
          </a>
          <a href="#testimonials" className=" rounded-xl p-1 hover:bg-white">
            Testimonials
          </a>
          <a href="#contact" className=" rounded-xl p-1 hover:bg-white">
            Contact{" "}
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
