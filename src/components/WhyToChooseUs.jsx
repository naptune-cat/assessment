const benefits = [
  { title: "Fast Payments", desc: "Get paid within 24 hours." },
  { title: "Secure Process", desc: "End-to-end encryption." },
  { title: "Top Valuations", desc: "Fair market pricing." },
  { title: "Trusted by 500+ Companies", desc: "Reliable and efficient." },
];
const WhyToChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-16">
      <h2 className="text-center text-2xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
        {benefits.map(({ title, desc }) => (
          <div key={title} className="p-4 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyToChooseUs;
