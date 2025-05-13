import React from "react";
const reviews = [
  {
    name: "Priyush Vishwakarma",
    role: "CTO",
    company: "VishwaGaming",
    feedback: "Fast and trustworthy. Highly recommended!",
  },
  {
    name: "Arya Gautam",
    role: "HR",
    company: "Tech Nova",
    feedback: "SoftSell made the resale process seamless",
  },
  {
    name: "Connie Tucker",
    role: "CEO",
    company: "Shelly Enterprises",
    feedback: "Best place to resell.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white text-center ">
      <h1 className="font-bold text-2xl">What our clients say about us</h1>
      <div>
        {reviews.map(({ name, role, company, feedback }) => (
          <div key={name} className="bg-gray-200 p-6 rounded-xl">
            <p className="italic ">"{feedback}"</p>
            <p className="font-bold">
              {name}-{role},{company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
