import teamAvery from "@/assets/images/team-avery.jpeg";
import teamCamille from "@/assets/images/team-camille.jpg";

const teamMembers = [
  {
    name: "Avery",
    role: "Marketing Strategist",
    image: teamAvery,
    bio: "Avery Dyer is a 17-year-old senior at Hebron High School. She serves as band officer, section leader, and head of media for Hebron Band. She holds National Honor Society membership and leads Hebron's Hands of Hope club.",
    mission:
      "Through working with Cozy Crates, she hopes to improve even more hurricane-impacted families' lives on a broader spectrum.",
    email: "avery.cozycratesorg@gmail.com",
  },
  {
    name: "Camille",
    role: "Content Creator",
    image: teamCamille,
    bio: "Camille Jones is a 17-year-old senior at Hebron High School. She serves as Social Officer on the drill team (Silver Wings), and is a member of Student Council and Key Club.",
    mission:
      "Through working with Cozy Crates, she hopes to return a sense of normalcy and comfort to the kids impacted by natural disasters.",
    email: "camille.cozycratesorg@gmail.com",
  },
];

export default function OurTeam() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-cc-black py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
          Our <span className="text-cc-green">Team</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Meet the passionate people behind Cozy Crates
        </p>
      </section>

      {/* Team grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg bg-cc-off-white shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="font-heading text-2xl font-bold">{member.name}</h2>
                  <p className="font-heading text-sm font-medium uppercase tracking-wider text-cc-green-dark">
                    {member.role}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">{member.bio}</p>
                  <p className="mt-3 italic text-gray-600">"{member.mission}"</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-block text-sm text-cc-green-dark hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
