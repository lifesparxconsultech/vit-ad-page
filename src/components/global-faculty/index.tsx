import Image from "next/image";

const faculty = [
  {
    name: "Dr. Sarveswari S",
    title: "Professor Higher Academic Grade",
    photo: "/faculty/faculty-3.jpg",
  },
  {
    name: "Dr. Arunai Nambi Raj N",
    title: "Professor Higher Academic Grade",
    photo: "/faculty/facultry-2.jpg",
  },
  {
    name: "Dr. Ramesh M Thamankar",
    title: "Associate Professor Senior",
    photo: "/faculty/faculty-1.png",
  },
];

export default function GlobalFaculty() {
  return (
    <section className="bg-cream-100 px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Global Faculty
      </h2>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {faculty.map((member) => (
          <div
            key={member.name}
            className="relative h-80 overflow-hidden rounded-2xl bg-navy-900/10 shadow-sm"
          >
            <Image
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover"
              width={100}
              height={100}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent p-4 pt-12">
              <p className="text-base font-bold text-white">{member.name}</p>
              <p className="text-sm font-medium text-gold-500">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}