function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Learning Hours",
    },
    {
      number: "500+",
      title: "AI Roadmaps Generated",
    },
    {
      number: "95%",
      title: "Goal Completion",
    },
    {
      number: "24/7",
      title: "AI Assistance",
    },
  ];

  return (
    <section className="bg-[#09090F] py-20 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#11111A] border border-zinc-800 rounded-2xl p-8 text-center hover:border-violet-500 transition duration-300"
            >
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-400 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;