const stats = [
  { value: "1,00,000+", label: "Global Learners" },
  { value: "500+", label: "Hiring Partners" },
  { value: "30+", label: "Industry Experts" },
];

export default function About() {
  return (
    <section className="bg-navy-900 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gold-500 sm:text-4xl">
          About VIT Master of Computer Applications
          <br />
          (MCA) Programme (Online)
        </h2>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold-500" />

        <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold leading-relaxed text-white sm:text-base">
          Online MCA program by Vellore Institute of Technology(VIT). This
          online Masters in Computer Application course from VIT helps to
          prepare students in Information Technology(IT) industry by
          educating with fundamentals and advances in Information Technology
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-navy-800 px-6 py-10 text-center"
          >
            <p className="text-4xl font-extrabold text-gold-500">{stat.value}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}