const semesters = [
  {
    label: "Semester 01",
    accent: "gold",
    description:
      "Foundations of Computing, Advanced Operating Systems, and Discrete Mathematics.",
  },
  {
    label: "Semester 02",
    accent: "navy",
    description:
      "Advanced Database Management, Object Oriented Programming, and Enterprise Java.",
  },
  {
    label: "Semester 03",
    accent: "gold",
    description:
      "Core Specialization Tracks, Web Technologies, and Cloud Infrastructure.",
  },
  {
    label: "Semester 04",
    accent: "navy",
    description: "Capstone Project, Internship Experience, and Advanced Cybersecurity.",
  },
];

export default function SemesterCurriculum() {
  return (
    <section className="bg-cream-100 px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Semester Curriculum
      </h2>

      <div className="mx-auto mt-16 max-w-3xl">
        {semesters.map((semester, index) => {
          const isLeft = index % 2 === 0;
          const isLast = index === semesters.length - 1;
          const dotClass = semester.accent === "gold" ? "bg-gold-500" : "bg-navy-900";
          const labelClass = semester.accent === "gold" ? "text-gold-500" : "text-navy-900";

          const textBlock = (
            <div>
              <p className={`text-lg font-bold ${labelClass}`}>{semester.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                {semester.description}
              </p>
            </div>
          );

          return (
            <div
              key={semester.label}
              className="grid grid-cols-[1fr_2rem_1fr] gap-x-6"
            >
              <div className={isLeft ? "pb-10 text-right" : "pb-10"}>
                {isLeft && textBlock}
              </div>

              <div className="flex flex-col items-center">
                <span className={`mt-1 h-4 w-4 flex-shrink-0 rounded-full ${dotClass}`} />
                {!isLast && (
                  <span
                    className={`w-px flex-1 ${
                      semester.accent === "gold" ? "bg-gold-500" : "bg-navy-900"
                    }`}
                  />
                )}
              </div>

              <div className={isLeft ? "pb-10" : "pb-10 text-left"}>
                {!isLeft && textBlock}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}