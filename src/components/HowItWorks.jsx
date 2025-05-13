import React from "react";

const steps = [
  {
    title: "Upload License",
    icon: "🧾",
  },
  {
    title: "Get Valuation",
    icon: "💰",
  },
  {
    title: "Get Paid",
    icon: "🏦",
  },
];
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white text-center">
      <h2 className="mb-10 mt-10 text-2xl font-bold ">How it works?</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {steps.map(({ title, icon }) => (
          <div key={title} className="flex flex-col items-center space-y-4">
            <div className="text-5xl">{icon}</div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
